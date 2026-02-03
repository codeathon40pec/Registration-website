const Prizes = () => {
    const prizes = [
        { title: "1st Prize", amount: "₹ 20,000", desc: "The Ultimate Survivor", icon: "🥇" },
        { title: "2nd Prize", amount: "₹ 10,000", desc: "The Derry Hero", icon: "🥈" },
        { title: "3rd Prize", amount: "₹ 5,000", desc: "Georgie's Boat Award", icon: "🥉" },
        { title: "Best Performers (x5)", amount: "₹ 1,000", desc: "Special Recognition", icon: "🏅" },
    ];

    return (
        <section id="prizes" className="section prizes-section">
            <div className="container">
                <h2 className="section-title">Rewards from the Sewers</h2>
                <div className="prizes-grid">
                    {prizes.map((prize, index) => (
                        <div key={index} className="prize-card">
                            <div className="trophy-icon">{prize.icon}</div>
                            <h3>{prize.title}</h3>
                            <div className="amount">{prize.amount}</div>
                            <p>{prize.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Prizes;
