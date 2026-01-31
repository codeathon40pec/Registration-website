import { useEffect, useRef } from 'react';

const BloodRain = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const dropCount = 50;

        const createDrop = () => {
            const drop = document.createElement('div');
            drop.classList.add('blood-drop');

            const x = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = 1 + Math.random() * 2; // Faster than balloons

            drop.style.left = `${x}vw`;
            drop.style.animationDelay = `${delay}s`;
            drop.style.animationDuration = `${duration}s`;

            container.appendChild(drop);
        };

        container.innerHTML = '';
        for (let i = 0; i < dropCount; i++) {
            createDrop();
        }

        return () => {
            if (container) container.innerHTML = '';
        };
    }, []);

    return <div className="blood-rain-container fixed inset-0 pointer-events-none z-0" ref={containerRef}></div>;
};

export default BloodRain;
