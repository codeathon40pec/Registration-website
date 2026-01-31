import { Link } from 'react-router-dom';
import feedbackRec from '../assets/feedback_rec.mp4';
import feedbackPsr from '../assets/feedback_psr.mp4';
import feedbackSathyabama from '../assets/feedback_sathyabama.mp4';
import after12HoursImg from '../assets/d4e30253-3288-4711-8e33-5c87f001f05a.jpg';
import firstPrizeWinnersImg from '../assets/1c31a91d-72cf-4135-b5e1-548a683df0dd.jpg';

const CodeathonThree = () => {
    const mediaItems = [
        {
            type: 'video',
            title: "Feedback 1",
            src: feedbackRec
        },
        {
            type: 'video',
            title: "Feedback 2",
            src: feedbackPsr
        },
        {
            type: 'video',
            title: "Feedback 3",
            src: feedbackSathyabama
        },
        {
            type: 'image',
            title: "after 12 hours",
            src: after12HoursImg
        },
        {
            type: 'image',
            title: "First prize winners",
            src: firstPrizeWinnersImg
        }
    ];

    return (
        <div className="min-h-screen bg-transparent text-white pt-24 pb-12 px-4 relative z-10">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-24 border-b border-[var(--primary-color)] pb-4">
                    <h1 className="text-3xl md:text-5xl font-['Butcherman'] text-[var(--primary-color)] drop-shadow-[0_0_10px_var(--primary-color)]">
                        Codeathon 3.0
                    </h1>
                    <Link
                        to="/"
                        className="px-3 py-2 md:px-6 md:py-2 border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-['Butcherman'] text-xl tracking-widest uppercase rounded hover:bg-[var(--primary-color)] hover:text-white hover:shadow-[0_0_20px_var(--primary-color)] hover:scale-105 transition-all duration-300 bg-black/50 flex items-center gap-2"
                    >
                        <span className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </span>
                        <span className="hidden md:inline">Back to Home</span>
                    </Link>
                </div>

                {/* Media Section */}
                <div className="flex flex-wrap justify-center gap-8 mt-12 mb-16">
                    {mediaItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-full md:w-[30%] min-w-[300px]">
                            <div className="h-16 flex items-center justify-center w-full mb-4">
                                <h2 className="text-base md:text-lg font-['Courier Prime'] font-bold text-[var(--primary-color)] text-center drop-shadow-sm tracking-wide leading-relaxed px-2 uppercase">
                                    {item.title}
                                </h2>
                            </div>
                            <div className="w-full aspect-video border border-[var(--primary-color)] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(200,0,0,0.3)] bg-black transition-transform hover:scale-105 duration-300">
                                {item.type === 'video' ? (
                                    <video controls className="w-full h-full object-cover">
                                        <source src={item.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coming Soon/Archive Text */}
                <div className="flex flex-col items-center justify-center min-h-[100px] text-center opacity-70">
                    <p className="text-lg text-gray-400 font-['Courier Prime'] max-w-2xl">
                        More archives from the sewers float below...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CodeathonThree;
