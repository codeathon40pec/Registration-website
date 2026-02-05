import { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import logo from '../assets/74946847075-removebg-preview.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md p-[30px] md:px-12 md:py-5 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
                <img
                    src={logo}
                    alt="Colege Logo"
                    className="w-10 md:w-16 opacity-90 drop-shadow-[0_0_5px_rgba(200,0,0,0.6)]"
                />
                <div className="flex flex-col items-start leading-none">
                    <span className="text-white text-xs md:text-base font-bold tracking-wide uppercase font-serif-logo">
                        PRATHYUSHA
                    </span>
                    <span className="text-white text-[10px] md:text-sm font-bold tracking-wider uppercase font-serif-logo">
                        ENGINEERING COLLEGE
                    </span>
                    <span className="text-gray-400 text-[8px] md:text-[10px] italic tracking-widest opacity-80 font-serif-logo">
                        An Autonomous Institution
                    </span>
                </div>
            </div>

            <nav className="flex items-center gap-4">
                {/* Navigation Links */}
                <ul className={`${isMenuOpen
                    ? 'flex flex-col fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 justify-center items-center z-40 gap-6'
                    : 'hidden'
                    } md:flex md:relative md:flex-row md:bg-transparent md:w-auto md:h-auto md:gap-8 md:items-center list-none`}
                >
                    {['Hero', 'About', 'Rules', 'Timeline', 'Prizes', 'Gallery', 'Core-Crew', 'Partners'].map((section) => (
                        <li key={section} className={(section === 'Core-Crew' || section === 'Partners') ? 'hidden md:block' : ''}>
                            <a
                                href={`#${section.toLowerCase()}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-300 hover:text-[var(--primary-color)] transition-colors uppercase font-bold tracking-wider hover:drop-shadow-[0_0_5px_var(--primary-color)] text-xl md:text-sm lg:text-base"
                            >
                                {section === 'Gallery' ? 'Glimpses' : section === 'Hero' ? 'Home' : section}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://forms.gle/645kQXMc9CmAyPny6"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="border border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-2 rounded md:px-4 md:py-1 hover:bg-[var(--primary-color)] hover:text-black transition-all uppercase font-bold tracking-wider shadow-[0_0_10px_var(--primary-color)] text-xl md:text-sm lg:text-base"
                        >
                            Register
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-4">
                <AudioPlayer />
                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[var(--primary-color)] text-3xl focus:outline-none z-50 relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </header>

    );
};

export default Navbar;
