import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2>Luxe<span>Estates</span></h2>
                    <p>Curating the world's most extraordinary properties for unparalleled living experiences.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <a href="#">Properties</a>
                        <a href="#">New Developments</a>
                        <a href="#">Neighborhoods</a>
                    </div>
                    <div className="footer-col">
                        <h4>Firm</h4>
                        <a href="#">About Us</a>
                        <a href="#">Our Agents</a>
                        <a href="#">Careers</a>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <a href="#">Inquiries</a>
                        <a href="#">Press</a>
                        <div className="social-links">
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Luxe Estates. All Rights Reserved. Demo purposes only. | Website by <a href="https://horizonspark.netlify.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>HorizonSpark</a></p>
            </div>
        </footer>
    );
};

export default Footer;
