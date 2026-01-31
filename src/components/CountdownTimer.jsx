import useCountdown from '../hooks/useCountdown';

const CountdownTimer = () => {
    const timeLeft = useCountdown('March 17, 2026 09:00:00');

    return (
        <div className="relative flex items-center justify-center my-12 z-20 w-full max-w-4xl mx-auto">
            {/* Timer */}
            <div className="relative z-10 flex gap-2 md:gap-8 bg-black/60 backdrop-blur-md px-4 py-4 md:px-8 md:py-6 rounded-2xl border border-[var(--primary-color)] shadow-[0_0_30px_rgba(255,0,0,0.3)] w-[95%] sm:w-auto justify-center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] md:min-w-[80px]">
                        <div className="text-2xl sm:text-3xl md:text-6xl font-black text-white font-mono bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {String(value).padStart(2, '0')}
                        </div>
                        <div className="text-[var(--primary-color)] text-[8px] sm:text-[10px] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold mt-1 md:mt-2 text-shadow-sm">
                            {unit}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;
