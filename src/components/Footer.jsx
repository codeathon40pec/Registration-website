import { FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-contact">
                    <a href="mailto:codeathon4.0@prathyusha.edu.in" aria-label="Email">
                        <FaEnvelope />
                    </a>
                    <a href="https://www.instagram.com/codeathon.pec?igsh=NnFzanJ4OTI4Z2Vv" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="tel:+918438849180" aria-label="Phone">
                        <FaPhone />
                    </a>
                </div>
                <p className="footer-dept">Department of CSE & CSBS, Prathyusha Engineering College</p>
                <p style={{ opacity: 0.6 }}>&copy; 2026 Codeathon 4.O. All rights reserved in this dimension.</p>
            </div>
        </footer>
    );
};
export default Footer;
