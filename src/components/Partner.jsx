const Partners = () => {
    return (
        <section id="partners" className="section partners-section relative z-20">
            <div className="container">
                <h2 className="section-title">Partners in Crime</h2>
                <div className="partners-grid">
                    <div className="partner-card">
                        <img src="https://res.cloudinary.com/dvvuhiora/image/upload/v1770281791/ehnfdrc9creqoec1tpwz.jpg" alt="Partner 1" className="w-full h-full object-contain" />
                    </div>
                    <div className="partner-card">
                        <img src="https://res.cloudinary.com/dvvuhiora/image/upload/v1770280515/zfmolskk68nxyrv8nm5f.jpg" alt="Partner 2" className="w-full h-full object-contain" />
                    </div>
                    <div className="partner-card">
                        <img src="https://res.cloudinary.com/dvvuhiora/image/upload/v1770284102/f3f8ywfofgbf5yaseooa.jpg" alt="Partner 3" className="w-full h-full object-contain" />
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
