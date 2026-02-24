import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onInquire }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    Luxe<span>Estates</span>
                </Link>

                <div className="nav-links">
                    <Link to="/properties" className="nav-link">Properties</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/agents" className="nav-link">Agents</Link>
                    <button className="nav-inquire-btn glass-card" onClick={onInquire}>Inquire Now</button>
                </div>

                <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/properties" onClick={() => setMobileMenuOpen(false)}>Properties</Link>
                <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link to="/agents" onClick={() => setMobileMenuOpen(false)}>Agents</Link>
                <button className="mobile-inquire-btn" onClick={() => { setMobileMenuOpen(false); onInquire(); }}>Inquire Now</button>
            </div>
        </nav>
    );
};

export default Navbar;
