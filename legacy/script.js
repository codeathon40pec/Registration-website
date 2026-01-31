document.addEventListener('DOMContentLoaded', () => {
    // Audio Control
    const audio = document.getElementById('theme-audio');
    const audioBtn = document.getElementById('audio-btn');
    let isPlaying = false;

    audioBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            audioBtn.textContent = '🔇';
            audioBtn.setAttribute('aria-label', 'Unmute Audio');
        } else {
            audio.play().then(() => {
                audioBtn.textContent = '🔊';
                audioBtn.setAttribute('aria-label', 'Mute Audio');
            }).catch(error => {
                console.log("Audio play failed usually due to browser policy:", error);
            });
        }
        isPlaying = !isPlaying;
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });

    // Particle/Spore Effect (The Upside Down)
    const particleContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random positioning properties
        const x = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 10 + Math.random() * 10;
        const size = Math.random() * 3 + 1;

        particle.style.left = `${x}vw`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particleContainer.appendChild(particle);
    }
});
