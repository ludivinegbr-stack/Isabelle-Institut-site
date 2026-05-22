import React, { useState } from 'react';
import { Instagram, Facebook, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'À propos', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    const socials = [
        { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://www.instagram.com/isabelle_institut/' },
        { name: 'Facebook', icon: <Facebook size={20} />, href: 'https://www.facebook.com/isabelleinstitutgouaix/' }
    ];

    return (
        <header className="header">
            <div className="container header-container">
                <a href="/" className="brand">Isabelle Institut</a>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="nav-socials">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <a href="#booking" className="btn btn-dark nav-cta" onClick={() => setIsMenuOpen(false)}>
                        Prendre RDV
                    </a>
                </nav>

                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </header>
    );
};

export default Header;
