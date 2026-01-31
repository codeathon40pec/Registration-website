import CountdownTimer from './CountdownTimer';

const Hero = () => {
    return (
        <section id="hero" className="hero min-h-screen flex items-center justify-center text-center relative px-4 overflow-hidden">
            <div className="hero-content max-w-5xl mx-auto flex flex-col items-center justify-center relative z-30 gap-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
                    <h1 className="strange-title text-4xl sm:text-6xl md:text-8xl font-black leading-tight tracking-wider" data-text="CODEATHON">
                        CODEATHON
                    </h1>
                    <h1 className="strange-title text-4xl sm:text-6xl md:text-8xl font-black leading-tight text-[#cf0000] drop-shadow-[0_0_15px_rgba(207,0,0,0.8)]" data-text="4.O">
                        4.O
                    </h1>
                </div>
                <p className="tagline text-lg sm:text-2xl md:text-4xl mb-6 md:mb-10 font-light tracking-wide text-gray-300">
                    You'll Float Too
                </p>
                <p className="date text-sm sm:text-lg md:text-2xl mb-8 md:mb-12 tracking-[2px] sm:tracking-[3px] md:tracking-[5px] text-[var(--primary-color)] font-bold uppercase drop-shadow-[0_0_10px_rgba(200,0,0,0.5)]">
                    March 10th - 11th, 2026 <span className="hidden sm:inline">|</span><br className="sm:hidden" /> 24 Hours
                </p>

                <CountdownTimer />

                <a
                    href="https://forms.gle/645kQXMc9CmAyPny6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="main-btn mt-8 md:mt-12 group relative inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-12 md:py-4 text-base md:text-2xl font-bold tracking-wide md:tracking-widest overflow-hidden transition-all duration-300 hover:scale-105"
                >
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">Enter if you dare</span>
                    <div className="absolute inset-0 bg-[var(--primary-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
                </a>
            </div>
        </section>
    );
};
export default Hero;
