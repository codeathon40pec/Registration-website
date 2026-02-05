import partnerImage from '../assets/images.jpg';
import downloadImage from '../assets/download.png';
import benhiveImage from '../assets/benhive.jpeg';

const Partners = () => {
    return (
        <section id="partners" className="section partners-section relative z-20">
            <div className="container">
                <h2 className="section-title">Partners in Crime</h2>
                <div className="partners-grid">
                    <div className="partner-card">
                        <img src={partnerImage} alt="Partner 1" className="w-full h-full object-contain" />
                    </div>
                    <div className="partner-card">
                        <img src={downloadImage} alt="Partner 2" className="w-full h-full object-contain" />
                    </div>
                    <div className="partner-card">
                        <img src={benhiveImage} alt="Partner 3" className="w-full h-full object-contain" />
                    </div>
                    {/* <div className="partner-card">Derry Public Works</div>
                    <div className="partner-card">Aladdin's Castle Arcade</div>
                    <div className="partner-card">Quality Meats</div>
                    <div className="partner-card">Derry Public Library</div> */}
                </div>
            </div>
        </section>
    );
};
export default Partners;
