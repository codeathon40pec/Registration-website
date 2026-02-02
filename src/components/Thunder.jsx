import { useState, useEffect, useRef } from 'react';
import { useAudio } from '../context/AudioContext';
import thunderSound from '../assets/thunder.mp3';
import silhouetteImg from '../assets/pngkey.com-model-silhouette-png-8795509.png';

const Thunder = () => {
    // Safety check: ensure useAudio returns context
    const context = useAudio();
    if (!context) return null; // Logic to handle missing provider

    const { isPlaying, getAudioData, isBlocked } = context;
    const [flashOpacity, setFlashOpacity] = useState(0);
    const lastFlashTimeRef = useRef(0);
    const audioRef = useRef(null);
    const animationFrameRef = useRef(null);
    const timeoutRef = useRef(null);

    // Initialize Thunder Audio (Secondary sound effect)
    useEffect(() => {
        try {
            audioRef.current = new Audio(thunderSound);
            audioRef.current.volume = 0.5;
        } catch (e) {
            console.error("Failed to initialize thunder audio", e);
        }
    }, []);

    const triggerFlash = () => {
        // If blocked (e.g. modal open), do NOTHING
        if (isBlocked) return;

        // Visuals
        setFlashOpacity(1);
        setTimeout(() => setFlashOpacity(0.4), 50);
        setTimeout(() => setFlashOpacity(0.8), 100);
        setTimeout(() => setFlashOpacity(0), 100);
        setTimeout(() => setFlashOpacity(0.6), 250);
        setTimeout(() => setFlashOpacity(0), 400);

        // Play Thunder Sound (ONLY if audio is enabled and not blocked)
        if (isPlaying && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => { });
        }
    };

    useEffect(() => {
        // Cleanup function to clear any existing timers/frames when effect re-runs
        const cleanup = () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };

        cleanup();

        if (isPlaying && typeof getAudioData === 'function') {
            // MODE 1: Audio Sync (Music is playing)
            const renderFrame = () => {
                try {
                    const data = getAudioData();
                    if (data) {
                        // Determine volume/beat
                        let sum = 0;
                        // Focus on very low frequencies (Bass) - Lower 1/8th of the spectrum
                        // FFT size 256 -> 128 bins. 1/8th is roughly first 16 bins.
                        const bassBins = Math.floor(data.length / 8);
                        for (let i = 0; i < bassBins; i++) {
                            sum += data[i];
                        }
                        const average = sum / bassBins;

                        // Threshold logic (Tuned for impact)
                        const now = Date.now();
                        // 210 is a high threshold for specific bass hits. 
                        // 4000ms cooldown gives it a dramatic, periodic feel rather than constant flashing.
                        if (average > 210 && now - lastFlashTimeRef.current > 4000) {
                            triggerFlash();
                            lastFlashTimeRef.current = now;
                        }
                    }
                } catch (e) {
                    // Silently fail frame to avoid crash
                }
                animationFrameRef.current = requestAnimationFrame(renderFrame);
            };

            renderFrame();
        } else {
            // MODE 2: Random Intervals (Muted/No Audio)
            const scheduleNextFlash = () => {
                // Random interval between 5 and 15 seconds
                const delay = Math.random() * 10000 + 5000;

                timeoutRef.current = setTimeout(() => {
                    triggerFlash();
                    scheduleNextFlash();
                }, delay);
            };

            // Start the first timer
            scheduleNextFlash();
        }

        return cleanup;
    }, [isPlaying, getAudioData]);

    return (
        <>
            {/* White Flash Overlay (Z-15: Above dark overlay, behind content) */}
            <div
                className="thunder-overlay fixed inset-0 pointer-events-none z-[15]"
                style={{
                    backgroundColor: 'white',
                    opacity: flashOpacity,
                    mixBlendMode: 'screen',
                    transition: 'opacity 0.05s ease-out'
                }}
            ></div>

            {/* Silhouette Reveal (Z-15: Above dark overlay, behind content) */}
            <div
                className="fixed inset-0 pointer-events-none z-[15] flex items-end justify-center"
                style={{
                    opacity: flashOpacity,
                    transition: 'opacity 0.05s ease-out'
                }}
            >
                <img
                    src={silhouetteImg}
                    alt="Lightning Reveal"
                    className="h-[80vh] object-contain opacity-100"
                />
            </div>
        </>
    );
};

export default Thunder;
