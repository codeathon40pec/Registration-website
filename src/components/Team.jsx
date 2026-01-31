import acmLogo from '../assets/ACM.png';
import googleLogo from '../assets/GOOGLE.png';
import paceLogo from '../assets/PACE.png';
import scopeLogo from '../assets/SCOPE.png';

const Team = () => {
    const organizers = [
        { name: "PACE", logo: paceLogo },
        { name: "GSA Club", logo: googleLogo },
        { name: "ACM", logo: acmLogo },
        { name: "SCOPE", logo: scopeLogo }
    ];

    return (
        <section id="team" className="section team-section relative z-20">
            <div className="container">
                <h2 className="section-title">The Team (Organizers)</h2>
                <div className="organizers-grid">
                    {organizers.map((org, index) => (
                        <div key={index} className="organizer-card">
                            <div className="organizer-logo-wrapper">
                                <img src={org.logo} alt={`${org.name} Logo`} className="organizer-logo" />
                            </div>
                            <h3 className="organizer-name">{org.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Team;
