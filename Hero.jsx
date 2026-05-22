import React from 'react';

const Hero = () => {
    return (
        <section className="hero hero-centered">
            <img src="/hero.png" alt="Institut de beauté" className="hero-bg" />
            <div className="hero-overlay-dark" style={{ background: 'rgba(0,0,0,0.2)' }}></div>
            <div className="container">
                <div className="hero-content" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '1000px' }}>
                    <h1 style={{ whiteSpace: 'normal', color: 'var(--color-white)' }}>Bienvenue dans votre voyage vers le bien-être</h1>
                    <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 'var(--spacing-md)' }}>
                        <a href="#services" className="btn btn-primary">Découvrir nos soins</a>
                        <a href="#booking" className="btn" style={{ marginLeft: '1rem', border: '1px solid var(--color-primary)', background: 'rgba(255,255,255,0.8)' }}>Prendre RDV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
