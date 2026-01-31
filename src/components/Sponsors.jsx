import partnerImage from '../assets/images.jpg';
import downloadImage from '../assets/download.png';

const Sponsors = () => {
    return (
        <section id="sponsors" className="section sponsors-section relative z-20">
            <div className="container">
                <h2 className="section-title">Partners in Crime</h2>
                <div className="sponsors-grid">
                    <div className="sponsor-card">
                        <img src={partnerImage} alt="Partner 1" className="w-full h-full object-contain" />
                    </div>
                    <div className="sponsor-card">
                        <img src={downloadImage} alt="Partner 2" className="w-full h-full object-contain" />
                    </div>
                    {/* <div className="sponsor-card">Derry Public Works</div>
                    <div className="sponsor-card">Aladdin's Castle Arcade</div>
                    <div className="sponsor-card">Quality Meats</div>
                    <div className="sponsor-card">Derry Public Library</div> */}
                </div>
            </div>
        </section>
    );
};
export default Sponsors;
