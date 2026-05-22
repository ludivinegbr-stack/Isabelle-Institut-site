import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section
                className="hero"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/hero-bg.jpg')" }}
            >
                <div className="hero-content">
                    <h1>
                        Sublimez vos événements <br /> & votre communication
                    </h1>
                    <p>
                        Graphisme, Papeterie de Mariage & Webdesign
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Commencer mon projet
                    </Link>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section text-center">
                <div className="container">
                    <h2 className="mb-6">Bienvenue</h2>
                    <p className="mb-8" style={{ maxWidth: '700px', margin: '0 auto 2rem', color: '#666' }}>
                        Je suis Ludivine, créatrice passionnée spécialisée dans la communication visuelle pour l'événementiel et les mariages.
                        Je transforme vos idées en visuels élégants et mémorables, des faire-part aux sites web.
                    </p>
                    <div className="grid grid-3">
                        <div className="card">
                            <div className="service-icon"><Star size={40} /></div>
                            <h3 className="mb-2">Sur-mesure</h3>
                            <p>Chaque création est unique et pensée pour vous correspondre parfaitement.</p>
                        </div>
                        <div className="card">
                            <div className="service-icon"><Star size={40} /></div>
                            <h3 className="mb-2">Élégance</h3>
                            <p>Un style raffiné et moderne pour sublimer votre image ou votre événement.</p>
                        </div>
                        <div className="card">
                            <div className="service-icon"><Star size={40} /></div>
                            <h3 className="mb-2">Proximité</h3>
                            <p>Une écoute attentive et un accompagnement à chaque étape du projet.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{
                backgroundImage: "url('/contact-marble.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                color: 'var(--color-text)'
            }}>
                <div className="container">
                    <h2 style={{ color: 'var(--color-secondary)' }} className="mb-6">Prêt à donner vie à vos idées ?</h2>
                    <p className="mb-8" style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>Contactez-moi pour discuter de votre projet de mariage ou de communication.</p>
                    <Link to="/contact" className="btn btn-primary">
                        Me contacter
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
