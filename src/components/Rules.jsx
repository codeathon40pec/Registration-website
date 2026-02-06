import { useRef } from 'react';

const Rules = () => {
    const rulesList = [
        { id: 1, title: "Identification", desc: "Valid student ID is mandatory and selected teams must submit a Bonafide certificate." },
        { id: 2, title: "Team Composition", desc: "Teams can have up to 4 members, including 1 lead and 3 members." },
        { id: 3, title: "Jury Decision", desc: "The decision of the jury members is final and binding." },
        { id: 4, title: "Equipment", desc: "Teams must bring their own laptops and other required accessories." },
        { id: 5, title: "Authorized Tools", desc: "Use of any technology, tools, or IoT sensors is allowed." },
        { id: 6, title: "Venue Rules", desc: "Work strictly within the contest venue and no external help or hints permitted." },
        { id: 7, title: "Participation", desc: "At least one team member must be actively coding at all times." },
        { id: 8, title: "Confidentiality", desc: "No discussion of problems with other teams." },
        { id: 9, title: "Monitoring", desc: "Referees will monitor all teams and report any violations." },
        { id: 10, title: "Disqualification", desc: "Any rule violation may lead to disqualification." },
        { id: 11, title: "Food & Dining", desc: "Dinner and snacks will be served." },
        { id: 12, title: "Refreshments", desc: "Light refreshments will be available." },
        { id: 13, title: "Power & Connectivity", desc: "It is suggested to bring your extension boxes and Wi-Fi dongles." },
    ];

    return (
        <section id="rules" className="section rules-section">
            <div className="container">
                <h2 className="section-title">Rules and Regulations</h2>
                <div className="rules-grid">
                    {rulesList.map((rule) => (
                        <div key={rule.id} className="rule-card">
                            <h3>{rule.title}</h3>
                            <p>{rule.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rules;
