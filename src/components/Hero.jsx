import CountdownTimer from './CountdownTimer';


const Hero = () => {
    return (
        <section id="hero" className="hero min-h-screen flex items-center justify-center text-center relative px-4 overflow-hidden">
            <div className="hero-content w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center relative z-30 gap-6">
                <div className="w-full flex justify-center items-center gap-4 mb-4 md:mb-8">
                    {/* Department Name - Horizontal Layout */}
                    <div className="flex items-center mt-2 md:mt-0">
                        <p className="text-white text-base sm:text-2xl md:text-3xl lg:text-5xl font-black tracking-widest uppercase leading-tight text-center px-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                            Department of CSE and CSBS
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
                        <h1 className="strange-title text-4xl sm:text-8xl md:text-10xl font-black leading-tight tracking-wider" data-text="CODEATHON">
                            CODEATHON
                        </h1>
                        <h1 className="strange-title text-4xl sm:text-8xl md:text-10xl font-black leading-tight text-[#cf0000] drop-shadow-[0_0_15px_rgba(207,0,0,0.8)]" data-text="4.O">
                            4.O
                        </h1>
                    </div>

                    <p className="text-[var(--primary-color)] text-base sm:text-xl md:text-2xl font-bold tracking-[2px] uppercase drop-shadow-[0_0_5px_rgba(200,0,0,0.5)] text-center">
                        National Level 24-Hours Codeathon
                    </p>
                </div>

                <p className="date text-sm sm:text-lg md:text-2xl mb-8 md:mb-12 tracking-[2px] sm:tracking-[3px] md:tracking-[5px] text-[var(--primary-color)] font-bold uppercase drop-shadow-[0_0_10px_rgba(200,0,0,0.5)]">
                    March 10th - 11th, 2026 <span className="hidden sm:inline">|</span><br className="sm:hidden" /> 24 Hours
                </p>

                <CountdownTimer />

                <div className="mt-8 md:mt-12 flex flex-col items-center gap-4">
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
        </section>
    );
};
export default Hero;
