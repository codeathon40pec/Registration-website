import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const Gallery = () => {
    const [activeVideo, setActiveVideo] = useState(null);





    const handleOpenVideo = (videoKey) => {
        const videoMap = {
            '1.0': {
                id: '6FAhf-aA2YU',
                title: 'Codeathon 1.0 Achievements'
            },
            '2.0': {
                id: 'J_J5X_xQg_g', // Video by Chennai Views: PRATHYUSHA CONDUCTS TAMILNADU STATE LEVEL CODEATHON-2023
                title: 'Codeathon 2.0 Highlights'
            }
        };
        setActiveVideo(videoMap[videoKey]);
    };

    return (
        <>
            <AnimatedSection id="gallery" className="section gallery">
                <div className="container">
                    <h2 className="section-title">Glimpses of the Past</h2>
                    <div className="gallery-content">
                        <button
                            onClick={() => handleOpenVideo('1.0')}
                            className="strange-btn"
                        >
                            Codeathon 1.O
                        </button>
                        <Link
                            to="/codeathon2"
                            className="strange-btn"
                        >
                            Codeathon 2.O
                        </Link>
                        <Link
                            to="/codeathon3"
                            className="strange-btn"
                        >
                            Codeathon 3.O
                        </Link>
                    </div>
                </div>
            </AnimatedSection>

            {activeVideo && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black backdrop-blur-none p-4" onClick={() => setActiveVideo(null)}>
                    <div className="relative w-full max-w-4xl bg-black border border-[var(--primary-color)] rounded-lg shadow-[0_0_30px_var(--primary-color)] p-2 md:p-6" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-[var(--primary-color)] text-black w-8 h-8 md:w-10 md:h-10 rounded-full text-xl font-bold flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10"
                            onClick={() => setActiveVideo(null)}
                        >
                            ×
                        </button>
                        <h3 className="text-white font-['Butcherman'] text-xl md:text-3xl mb-4 text-center drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{activeVideo.title}</h3>
                        <div className="relative w-full aspect-video rounded overflow-hidden border border-white/10">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                                title={activeVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Gallery;
