import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, Linkedin } from 'lucide-react';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'À propos', path: '/about' },
        { name: 'Prestations', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    return (
        <div className="layout">
            {/* Navbar */}
            <header className="navbar">
                <div className="container nav-container">
                    <Link to="/" className="logo">
                        Polly<span>Communication</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="nav-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={isActive(link.path)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <nav className="mobile-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={isActive(link.path)}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                )}
            </header>

            {/* Main Content */}
            <main className="main-content" style={{ paddingTop: '80px' }}>
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="footer" style={{
                borderTop: '50px solid transparent',
                borderImageSource: "url('/contact-marble.jpg')",
                borderImageSlice: '30',
                background: 'var(--color-background)',
                color: 'var(--color-text)'
            }}>
                <div className="container">
                    <div className="grid grid-3">
                        <div>
                            <h3 className="mb-4" style={{ color: 'var(--color-secondary)' }}>Polly Communication</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>
                                Créatrice de visuels et sites web pour vos événements inoubliables.
                            </p>
                        </div>

                        <div>
                            <h4 className="mb-4" style={{ color: 'var(--color-primary)' }}>Contact</h4>
                            <p className="mb-2" style={{ color: 'var(--color-text-light)' }}>Email: pollycommunication@gmail.com</p>
                            <p style={{ color: 'var(--color-text-light)' }}>Tél : 06.48.55.14.64</p>
                            <p style={{ color: 'var(--color-text-light)' }}>Basée en France</p>
                        </div>

                        <div>
                            <h4 className="mb-4" style={{ color: 'var(--color-primary)' }}>Suivez-moi</h4>
                            <div className="social-links">
                                <a href="https://www.instagram.com/pollycommunication/" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ color: 'var(--color-secondary)' }}><Instagram size={24} /></a>
                                <a href="mailto:pollycommunication@gmail.com" className="social-btn" style={{ color: 'var(--color-secondary)' }}><Mail size={24} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-20" style={{ borderTop: '1px solid #ddd', paddingTop: '2rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                        &copy; {new Date().getFullYear()} Polly Communication. Tous droits réservés.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
