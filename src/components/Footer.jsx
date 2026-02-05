import { FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-contact">
                    <a href="mailto:codeathon4.0pec@gmail.com" aria-label="Email">
                        <FaEnvelope />
                    </a>
<<<<<<< HEAD
                    <a href="https://www.instagram.com/codeathon.pec?igsh=NnFzanJ4OTl4Z2Vv" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="tel:+91 8438849180" aria-label="Phone">
=======
                    <a href="https://www.instagram.com/codeathon.pec?igsh=NnFzanJ4OTI4Z2Vv" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="tel:+918438849180" aria-label="Phone">
>>>>>>> 58458ce5d377336c4e35fa88c02c0528e2787634
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
