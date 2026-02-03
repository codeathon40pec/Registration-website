const Timeline = () => {
    const events = [
        { time: "March 10, 09:00 AM", title: "The Sewer Opens", desc: "Registration & Inauguration" },
        { time: "March 10, 10:00 AM", title: "Hack Begins", desc: "Problem statements revealed. Enter the Deadlights." },
        { time: "March 10, 01:30 PM", title: "Feast on Fear", desc: "Lunch Break. Fuel your nightmares." },
        { time: "March 10, 05:00 PM", title: "Georgie's Guidance", desc: "Mentoring Session 1. Don't take balloons from strangers." },
        { time: "March 10, 08:30 PM", title: "Derry Dinner", desc: "Dinner. You'll float too if you don't eat." },
        { time: "March 11, 01:00 AM", title: "Midnight Float", desc: "Midnight Snacks & Fun. Red balloons everywhere." },
        { time: "March 11, 08:00 AM", title: "The Last Meal", desc: "Breakfast. Final energy boost before the end." },
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
