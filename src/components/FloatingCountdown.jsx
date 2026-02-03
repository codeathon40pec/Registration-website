import { useState, useEffect } from 'react';
import useCountdown from '../hooks/useCountdown';


const FloatingCountdown = () => {
    const [targetDate, setTargetDate] = useState('March 10, 2026 10:00:00');
    const [status, setStatus] = useState('PRE_EVENT');
    const timeLeft = useCountdown(targetDate);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date().getTime();
            const start = new Date('March 10, 2026 10:00:00').getTime();
            const end = new Date('March 11, 2026 10:00:00').getTime();

            if (now > end) {
                setStatus('ENDED');
            } else if (now > start) {
                setStatus('ONGOING');
                setTargetDate('March 11, 2026 10:00:00');
            } else {
                setStatus('PRE_EVENT');
                setTargetDate('March 10, 2026 10:00:00');
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const toggleVisibility = () => {
            const aboutSection = document.getElementById('about');
            const threshold = aboutSection ? aboutSection.offsetTop - 200 : 500;

            if (window.scrollY > threshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) return null;

    if (status === 'ENDED') {
        return (
            <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center animate-fade-in transition-all duration-300">
                <div className="relative z-10 bg-black/80 backdrop-blur-sm border border-[var(--primary-color)] rounded-xl p-4 shadow-[0_0_20px_rgba(255,0,0,0.4)] min-w-[200px]">
                    <div className="text-xl font-bold text-[var(--primary-color)] font-mono text-center uppercase tracking-widest animate-pulse">
                        Event Ended
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center animate-fade-in transition-all duration-300">
            {/* Timer Content */}
            <div className="relative z-10 bg-black/80 backdrop-blur-sm border border-[var(--primary-color)] rounded-xl p-4 shadow-[0_0_20px_rgba(255,0,0,0.4)] min-w-[200px]">
                {status === 'ONGOING' && (
                    <div className="text-center text-[var(--primary-color)] text-xs font-bold uppercase tracking-widest mb-2 animate-pulse">
                        Event Started
                    </div>
                )}
                <div className="flex justify-center gap-3">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="flex flex-col items-center min-w-[35px]">
                            <div className="text-xl font-bold text-white font-mono">
                                {String(value).padStart(2, '0')}
                            </div>
                            <div className="text-[var(--primary-color)] text-[8px] uppercase tracking-wider font-bold">
                                {unit}
                            </div>
                        </div>
                    ))}
                </div>
                {status === 'PRE_EVENT' && (
                    <a
                        href="https://forms.gle/645kQXMc9CmAyPny6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center mt-2 text-[10px] text-white hover:text-[var(--primary-color)] underline transition-colors uppercase tracking-widest"
                    >
                        Register Now
                    </a>
                )}
            </div>
        </div>
    );
};

export default FloatingCountdown;
