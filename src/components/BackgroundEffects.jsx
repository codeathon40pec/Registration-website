import { useLocation } from 'react-router-dom';
import BloodRain from './BloodRain';

import Thunder from './Thunder';

const BackgroundEffects = () => {
    const location = useLocation();
    const isMinimal = location.pathname.includes('/codeathon');

    if (isMinimal) {
        return <div className="fixed inset-0 bg-black/90 z-[-1]"></div>;
    }

    return (
        <>
            {/* Background Shadow Layer */}
            <div className="shadow-layer fixed inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30 mix-blend-overlay">
                <div className="relative transform scale-125">
                    {/* Shadow/Silhouette Effect */}
                    <img src="./assets/pennywise.png" alt="" className="w-[600px] blur-[3px] brightness-0" />
                    <img src="./assets/red_balloon-removebg-preview.png" alt="" className="absolute -top-32 -right-32 w-[200px] brightness-50 animate-pulse" />
                </div>
            </div>

            {/* Lighting Effect (Red Glow) */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-red-900/5 to-black/90"></div>

            <div className="overlay"></div>
            <div className="storm"></div>
            <BloodRain />

            <Thunder />
            <div className="fog-layer-1"></div>
            <div className="fog-layer-2"></div>
        </>
    );
};
export default BackgroundEffects;
