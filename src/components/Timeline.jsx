const Timeline = () => {
    const events = [
        { time: "March 10, 09:00 AM", title: "The Sewer Opens", desc: "Registration & Inauguration" },
        { time: "March 10, 10:00 AM", title: "Hack Begins", desc: "Problem statements revealed. Enter the Deadlights." },

        { time: "March 11, 10:00 AM", title: "Hack Ends", desc: "Survive the 24 hours. Submit your prototype." },
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
