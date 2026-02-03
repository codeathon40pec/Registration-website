const Timeline = () => {
    const events = [
        { time: "March 10, 07:00 AM", title: "The Arrival", desc: "Registration" },
        { time: "March 10, 09:00 AM", title: "The Awakening", desc: "Inauguration" },
        { time: "March 10, 10:30 AM", title: "The Revelation", desc: "Problem Statement Reveal" },
        { time: "March 10, 12:30 PM", title: "First Encounter", desc: "Round 1 Evaluation" },
        { time: "March 10, 04:00 PM", title: "Survival Fuel", desc: "Refreshment" },
        { time: "March 10, 05:00 PM", title: "The Second Wave", desc: "Round 2 Evaluation" },
        { time: "March 10, 11:00 PM", title: "Midnight Feast", desc: "Refreshment" },
        { time: "March 11, 07:00 AM", title: "The Final Test", desc: "Round 3 Evaluation" },
        { time: "March 11, 10:00 AM", title: "The End is Nigh", desc: "Codeathon Ends" },
        { time: "March 11, 10:30 AM", title: "The Aftermath", desc: "Valedictory" },
    ];

    return (
        <section id="timeline" className="section timeline-section">
            <div className="container">
                <h2 className="section-title">Timeline of Events</h2>
                <div className="timeline">
                    {events.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <span className="time">{item.time}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Timeline;
