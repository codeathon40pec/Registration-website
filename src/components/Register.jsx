import AnimatedSection from './AnimatedSection';

const Register = () => {
    return (
        <AnimatedSection id="register" className="section register">
            <div className="container">
                <h2>Join the Losers event</h2>
                <a
                    href="https://forms.gle/645kQXMc9CmAyPny6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="main-btn group relative inline-flex items-center gap-3 px-8 py-3 md:px-12 md:py-4 text-xl md:text-2xl font-bold tracking-widest overflow-hidden transition-all duration-300 hover:scale-105"
                >
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">Register Now</span>
                </a>
            </div>
        </AnimatedSection>
    );
};
export default Register;
