import { useEffect, useRef } from 'react';

const AnimatedSection = ({ id, className, children }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.2 }
        );

        const current = sectionRef.current;
        if (current) {
            // Initial styles
            current.style.opacity = '0';
            current.style.transform = 'translateY(30px)';
            current.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            observer.observe(current);
        }

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    return (
        <section id={id} className={className} ref={sectionRef}>
            {children}
        </section>
    );
};

export default AnimatedSection;
