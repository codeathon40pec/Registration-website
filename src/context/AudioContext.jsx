import { createContext, useState, useContext, useRef, useEffect, useCallback } from 'react';
import themeAudio from '../assets/halloween_circus.mp3';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const analyserRef = useRef(null);
    const dataArrayRef = useRef(null);
    const audioContextRef = useRef(null);
    const sourceNodeRef = useRef(null);
    const audioBufferRef = useRef(null);

    const hasInteractedRef = useRef(false);
    const isMediaPlayingRef = useRef(false); // Track if external media is blocking audio

    useEffect(() => {
        // Init context immediately to be ready for interaction unlocks
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContextClass();
        audioContextRef.current = audioContext;

        // Create Analyser
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        analyserRef.current = analyser;

        const bufferLength = analyser.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);

        const loadAudio = async () => {
            try {
                const response = await fetch(themeAudio);
                const arrayBuffer = await response.arrayBuffer();

                // Decode
                const decodedBuffer = await audioContext.decodeAudioData(arrayBuffer);
                audioBufferRef.current = decodedBuffer;

                // Check if user already interacted while we were loading
                if (hasInteractedRef.current) {
                    tryPlay(audioContext, decodedBuffer, analyser);
                } else {
                    // Try auto-play anyway (might work if policy allows)
                    tryPlay(audioContext, decodedBuffer, analyser);
                }

            } catch (error) {
                console.error("Error loading audio:", error);
            }
        };

        loadAudio();

        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    const tryPlay = (ctx, buffer, analyser) => {
        if (!ctx || !buffer || sourceNodeRef.current || isMediaPlayingRef.current) return;

        try {
            // If context is suspended and we think we can play, try resuming
            if (ctx.state === 'suspended' && hasInteractedRef.current && !isMediaPlayingRef.current) {
                ctx.resume();
            }

            const source = ctx.createBufferSource();
            source.buffer = buffer;
            source.loop = true;
            source.connect(analyser);
            analyser.connect(ctx.destination);
            source.start(0);
            sourceNodeRef.current = source;
            setIsPlaying(true);
        } catch (e) {
            console.log("Play failed (likely needs interaction)", e);
            setIsPlaying(false);
        }
    };

    // Unlock audio on ANY interaction
    useEffect(() => {
        const handleInteraction = async () => {
            hasInteractedRef.current = true;

            if (audioContextRef.current) {
                // ONLY unlock if we are not explicitly blocked by external media
                if (audioContextRef.current.state === 'suspended' && !isMediaPlayingRef.current) {
                    try {
                        await audioContextRef.current.resume();
                    } catch (e) {
                        console.error("Resume failed", e);
                    }
                }

                // If we have data but not playing, try playing now
                // Also check !isMediaPlayingRef.current here
                if (!isPlaying && audioBufferRef.current && !sourceNodeRef.current && !isMediaPlayingRef.current) {
                    tryPlay(audioContextRef.current, audioBufferRef.current, analyserRef.current);
                }
            }
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, [isPlaying]);

    // Handle Page Visibility (Tab Switch) & Focus
    useEffect(() => {
        const handleVisibilityChange = async () => {
            const shouldSuspend = document.hidden;
            // Also check document.visibilityState if needed, but hidden is standard

            if (shouldSuspend) {
                // User switched tabs or minimized -> Suspend Audio
                if (audioContextRef.current && audioContextRef.current.state === 'running') {
                    try {
                        await audioContextRef.current.suspend();
                    } catch (e) {
                        console.error("Suspend failed", e);
                    }
                }
            } else {
                // User came back -> Resume ONLY if it was supposed to be playing AND NOT BLOCKED
                if (isPlaying && audioContextRef.current && audioContextRef.current.state === 'suspended' && !isMediaPlayingRef.current) {
                    try {
                        await audioContextRef.current.resume();
                    } catch (e) {
                        console.error("Resume failed", e);
                    }
                }
            }
        };

        const handleBlur = async () => {
            // Optional: if user clicks URL bar or another window, pause.
            // This is stricter than visibilityChange.
            if (audioContextRef.current && audioContextRef.current.state === 'running') {
                try {
                    await audioContextRef.current.suspend();
                } catch (e) { }
            }
        };

        const handleFocus = async () => {
            if (isPlaying && audioContextRef.current && audioContextRef.current.state === 'suspended' && !isMediaPlayingRef.current) {
                try {
                    await audioContextRef.current.resume();
                } catch (e) { }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('blur', handleBlur);
        window.addEventListener('focus', handleFocus);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('blur', handleBlur);
            window.removeEventListener('focus', handleFocus);
        };
    }, [isPlaying]);

    const toggleAudio = useCallback(async () => {
        if (!audioContextRef.current || !audioBufferRef.current) return;

        if (audioContextRef.current.state === 'suspended') {
            try {
                await audioContextRef.current.resume();
            } catch (e) {
                console.error("Resume failed:", e);
            }
        }

        if (isPlaying) {
            // Pause logic
            if (sourceNodeRef.current) {
                try {
                    sourceNodeRef.current.stop();
                    sourceNodeRef.current.disconnect();
                    sourceNodeRef.current = null;
                } catch (e) { }
            }
            setIsPlaying(false);
        } else {
            // Play logic
            const source = audioContextRef.current.createBufferSource();
            source.buffer = audioBufferRef.current;
            source.loop = true;

            // Connect: Source -> Analyser -> Destination
            source.connect(analyserRef.current);
            analyserRef.current.connect(audioContextRef.current.destination);

            source.start(0);
            sourceNodeRef.current = source;
            setIsPlaying(true);
        }
    }, [isPlaying]);

    const getAudioData = useCallback(() => {
        if (analyserRef.current && dataArrayRef.current) {
            analyserRef.current.getByteFrequencyData(dataArrayRef.current);
            return dataArrayRef.current;
        }
        return null;
    }, []);

    // State to force re-render when blocked status changes
    const [isBlocked, setIsBlocked] = useState(false);

    const suspendAudio = useCallback(async () => {
        isMediaPlayingRef.current = true; // Mark as blocked by media
        setIsBlocked(true);
        if (audioContextRef.current && audioContextRef.current.state === 'running') {
            try {
                await audioContextRef.current.suspend();
            } catch (e) {
                console.error("Manual suspend failed", e);
            }
        }
    }, []);

    const resumeAudio = useCallback(async () => {
        isMediaPlayingRef.current = false; // Unblock
        setIsBlocked(false);
        if (isPlaying && audioContextRef.current && audioContextRef.current.state === 'suspended') {
            try {
                await audioContextRef.current.resume();
            } catch (e) {
                console.error("Manual resume failed", e);
            }
        }
    }, [isPlaying]);

    return (
        <AudioContext.Provider value={{ isPlaying, toggleAudio, getAudioData, suspendAudio, resumeAudio, isBlocked }}>
            {children}
        </AudioContext.Provider>
    );
};
