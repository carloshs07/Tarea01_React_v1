import React from 'react';
import './Footer.css'; // Optional: Add styles in a separate CSS file
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>© 2025 Super Heroes Website | UCreativa | Carlos Hernandez.</p>
                <div className="links">
                    <a href="#privacy" className="link">Politica de Privacidad</a>
                    <a href="#terms" className="link">Terminos de Uso</a>
                    <a href="#contact" className="link">Contacto</a>
                </div>
            </div>
        </footer>
    );
};


export default Footer;