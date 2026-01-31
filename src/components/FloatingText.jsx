import { useEffect, useState } from 'react';

const FloatingText = () => {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const x = Math.random() * 80 + 10; // Keep within 10-90% width
            const y = Math.random() * 80 + 10;

            setPositions(prev => [...prev, { id, x, y }]);

            // Remove after animation
            setTimeout(() => {
                setPositions(prev => prev.filter(p => p.id !== id));
            }, 4000); // Match CSS animation duration
        }, 3000); // New text every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            {positions.map(p => (
                <div
                    key={p.id}
                    className="absolute text-red-600/40 font-nosifer text-lg md:text-2xl animate-float-fade"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                    You'll Float Too
                </div>
            ))}
        </div>
    );
};

export default FloatingText;
