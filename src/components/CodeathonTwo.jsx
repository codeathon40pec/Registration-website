import { useRef, useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { Link } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';

const CodeathonTwo = () => {
    // Audio handled by App.jsx globally
    // const { suspendAudio, resumeAudio } = useAudio();

    const socialLinks = [
        { url: "https://www.instagram.com/reel/C4lFT8Kx0Op/", title: "Theme Reveal" },
        { url: "https://www.instagram.com/p/C4abYNRxF4M/", title: "Poster" },
        { url: "https://www.instagram.com/reel/C4hurvsrD38/", title: "Promo 1" },
        { url: "https://www.instagram.com/reel/C4nnldiRL_I/", title: "Promo 2" },
        { url: "https://www.instagram.com/reel/C4c5wR4RjRl/", title: "Promo 3" },
        { url: "https://www.instagram.com/reel/C40EQoiRjvz/", title: "Event Day" },
        { url: "https://www.instagram.com/reel/C40ek_hxHAs/", title: "Codeathon Day 1" },
        { url: "https://www.instagram.com/reel/C41fTawvITV/", title: "Codeathon Day 2" },
        { url: "https://www.instagram.com/reel/C48EPtQxkao/", title: "Codeathon Day 3" },
    ];

    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-12 px-0 md:px-4 relative z-10">
            <div className="w-full md:container md:mx-auto">
                {/* Header */}
                {/* Header */}
                <div className="w-full flex flex-row justify-between items-center mb-28 md:mb-32 border-b border-[var(--primary-color)] pb-4 md:pb-10 gap-2 px-3 md:px-0">
                    <h1 className="text-2xl md:text-5xl font-['Butcherman'] text-[var(--primary-color)] drop-shadow-[0_0_10px_var(--primary-color)] text-left whitespace-nowrap leading-tight">
                        Codeathon 2.0
                    </h1>
                    <Link
                        to="/"
                        className="px-5 py-2.5 border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-['Butcherman'] text-sm md:text-xl tracking-widest uppercase rounded hover:bg-[var(--primary-color)] hover:text-white hover:shadow-[0_0_20px_var(--primary-color)] hover:scale-105 transition-all duration-300 bg-black/50 flex items-center gap-2"
                    >
                        <span className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </span>
                        <span className="hidden md:inline">Back to Home</span>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center mt-12">
                    {socialLinks.map((item, index) => (
                        <div key={index} className="w-full max-w-[320px] md:max-w-[1024px] mx-auto flex flex-col items-center">
                            <div className="mb-4 text-xl font-bold text-[var(--primary-color)] w-full text-center drop-shadow-[0_0_5px_var(--primary-color)] strange-title tracking-wider" data-text={item.title}>
                                {item.title}
                            </div>
                            <div className="w-full rounded-lg overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(255,0,0,0.1)] hover:shadow-[0_0_25px_rgba(255,0,0,0.3)] transition-shadow duration-300 bg-black flex justify-center">
                                <InstagramEmbed url={item.url} width="100%" style={{ maxWidth: 328 }} captioned />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CodeathonTwo;
