import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Particles = () => {
    const containerRef = useRef(null);
    const location = useLocation();
    const isMinimal = location.pathname.includes('/codeathon');

    useEffect(() => {
        if (isMinimal) return; // Don't create particles on minimal pages

        const container = containerRef.current;
        const particleCount = 30;

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Random positioning properties
            const x = Math.random() * 100;
            const delay = Math.random() * 20; // 0 to 20s delay
            const duration = 15 + Math.random() * 15; // 15 to 30s duration (slower for balloons)
            const size = 30 + Math.random() * 20; // 30 to 50px size

            particle.style.left = `${x}vw`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size * 1.3}px`; // Aspect ratio for balloon

            container.appendChild(particle);
        };

        // Clear existing particles to prevent duplication in React.StrictMode
        if (container) container.innerHTML = '';

        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }

        return () => {
            if (container) container.innerHTML = '';
        };
    }, [isMinimal]);

    if (isMinimal) return null;

    return <div className="particles" ref={containerRef}></div>;
};

export default Particles;
