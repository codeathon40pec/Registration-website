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

    useEffect(() => {
        const loadAudio = async () => {
            try {
                const response = await fetch(themeAudio);
                const arrayBuffer = await response.arrayBuffer();
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                audioContextRef.current = audioContext;

                // Create Analyser
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 256;
                analyserRef.current = analyser;

                const bufferLength = analyser.frequencyBinCount;
                dataArrayRef.current = new Uint8Array(bufferLength);

                const decodedBuffer = await audioContext.decodeAudioData(arrayBuffer);
                audioBufferRef.current = decodedBuffer;

                // Auto-play attempt
                try {
                    const source = audioContext.createBufferSource();
                    source.buffer = decodedBuffer;
                    source.loop = true;
                    source.connect(analyser);
                    analyser.connect(audioContext.destination);
                    source.start(0);
                    sourceNodeRef.current = source;
                    setIsPlaying(true);
                } catch (e) {
                    console.log("Auto-play blocked", e);
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

    // Unlock audio on first interaction if blocked
    useEffect(() => {
        const handleInteraction = async () => {
            if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                try {
                    await audioContextRef.current.resume();
                    if (!isPlaying && audioBufferRef.current && !sourceNodeRef.current) {
                        try {
                            // Re-trigger play logic if it wasn't started
                            const source = audioContextRef.current.createBufferSource();
                            source.buffer = audioBufferRef.current;
                            source.loop = true;
                            source.connect(analyserRef.current);
                            analyserRef.current.connect(audioContextRef.current.destination);
                            source.start(0);
                            sourceNodeRef.current = source;
                            setIsPlaying(true);
                        } catch (e) {
                            console.error("Play on interaction failed", e);
                        }
                    }
                } catch (e) {
                    console.error("Audio Context resume failed", e);
                }
            }
        };

        window.addEventListener('click', handleInteraction);
        return () => window.removeEventListener('click', handleInteraction);
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

    return (
        <AudioContext.Provider value={{ isPlaying, toggleAudio, getAudioData }}>
            {children}
        </AudioContext.Provider>
    );
};
