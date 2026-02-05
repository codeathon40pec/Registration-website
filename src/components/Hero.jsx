import CountdownTimer from './CountdownTimer';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
    return (
        <section id="hero" className="hero min-h-screen flex items-start justify-center text-center relative px-4 overflow-hidden" style={{ paddingTop: '80px' }}>
            <div className="hero-content w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center relative z-30 gap-8">
                <div className="w-full flex justify-center items-center gap-4 mb-4 md:mb-6">
                    {/* Department Name - Responsive Layout */}
                    <div className="flex items-center mt-4 md:mt-0">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider uppercase leading-snug text-center px-2 max-w-full !text-white" style={{ fontFamily: '"Nosifer", cursive' }}>
                            <span className="md:hidden">
                                Department of <br />
                                Computer Science and Engineering <br />
                                & <br />
                                Computer Science / Business Systems
                            </span>
                            <span className="hidden md:block">
                                Department of Computer Science and Engineering & <br />
                                Computer Science and Business Systems
                            </span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
                        <h1 className="strange-title text-4xl sm:text-8xl md:text-10xl font-black leading-tight tracking-wider" data-text="CODEATHON">
                            CODEATHON
                        </h1>
                        <h1 className="strange-title text-4xl sm:text-8xl md:text-10xl font-black leading-tight text-[#cf0000] drop-shadow-[0_0_15px_rgba(207,0,0,0.8)]" data-text="4.O">
                            4.O
                        </h1>
                    </div>

                    <p className="text-[var(--primary-color)] text-base sm:text-2xl md:text-3xl font-bold tracking-[4px] uppercase drop-shadow-[0_0_5px_rgba(180,0,0,0.5)] text-center">
                        National Level 24-Hours Codeathon
                    </p>

                    <p className="text-[#cf0000] text-lg sm:text-2xl font-bold tracking-widest uppercase mb-16" style={{ fontFamily: '"Courier New", monospace' }}>
                        March 10th - 11th, 2026
                    </p>

                    <CountdownTimer />

                    {/*<div className="mt-8 flex flex-col items-center">
                        <h3 className="text-red-500 text-xl font-bold mb-4 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(200,0,0,0.8)]">Join the Event</h3>
                        <a href="#register" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-transparent border-2 border-[#cf0000] hover:bg-[#cf0000]/20">
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                            <span className="relative text-[#cf0000] group-hover:text-white tracking-widest uppercase text-xl">Register Now</span>
                        </a>
                    </div>*/}
                    <AnimatedSection id="register" className="section register !pt-10 -mt-10">
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
