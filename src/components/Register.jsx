import AnimatedSection from './AnimatedSection';

const Register = () => {
    return (
        <AnimatedSection id="register" className="section register">
            <div className="container">
                <div className="flex flex-col items-center gap-4">
                    <p className="text-[#cf0000] strange-title text-xl md:text-3xl tracking-widest animate-pulse drop-shadow-[0_0_10px_rgba(207,0,0,0.8)]">
                        JOIN THE EVENT
                    </p>
                    <a
                        href="https://forms.gle/645kQXMc9CmAyPny6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="main-btn group relative inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-12 md:py-4 text-base md:text-2xl font-bold tracking-wide md:tracking-widest overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                        <span className="relative z-10 group-hover:text-black transition-colors duration-300">REGISTER NOW</span>
                        <div className="absolute inset-0 bg-[var(--primary-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
                    </a>
                </div>
            </div>
        </AnimatedSection>
    );
};
export default Register;
