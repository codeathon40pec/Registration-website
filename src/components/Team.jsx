const CoreCrew = () => {
    const organizers = [
        { name: "PACE", logo: "https://res.cloudinary.com/dvvuhiora/image/upload/v1770281600/gbrvxm0vpiv5sc3iwwyb.jpg" },
        { name: "GSA Club", logo: "https://res.cloudinary.com/dvvuhiora/image/upload/v1770281831/o4xdg8em520yf1mwrpza.jpg" },
        { name: "ACM", logo: "https://res.cloudinary.com/dvvuhiora/image/upload/v1770281831/o4xdg8em520yf1mwrpza.jpg" },
        { name: "SCOPE", logo: "https://res.cloudinary.com/dvvuhiora/image/upload/v1770281685/wrpodr9ydxsjuzsjp4hr.jpg" }
    ];

    return (
        <section id="core-crew" className="section core-crew-section relative z-20">
            <div className="container">
                <h2 className="section-title">Core-Crew(Organizers)</h2>
                <div className="organizers-grid">
                    {organizers.map((org, index) => (
                        <div key={index} className="organizer-card">
                            {org.logo && (
                                <div className="organizer-logo-wrapper">
                                    <img src={org.logo} alt={`${org.name} Logo`} className="organizer-logo" />
                                </div>
                            )}
                            <h3 className="organizer-name">{org.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default CoreCrew;
