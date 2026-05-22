import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './sections/About';
import Services from './sections/Services';
import BookingForm from './sections/BookingForm';
import Testimonials from './sections/Testimonials';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <BookingForm />

        {/* Contact Section with Map */}
        <section id="contact" className="section bg-light">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Nous trouver</h2>
              <p className="section-subtitle">Situé au 12 grande rue, 77114 Gouaix.</p>
            </div>
            <div className="map-container" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.516499885449!2d3.3512803770425!3d48.465800071271675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ef25ee965f32f3%3A0xe51ba3b065a7f9!2s12%20Grande%20Rue%2C%2077114%20Gouaix!5e0!3m2!1sfr!2sfr!4v1713106500000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="brand" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>ISABELLE INSTITUT</div>
          <p style={{ marginBottom: '2rem', color: '#999' }}>Votre escale beauté & bien-être.</p>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>
            <p>&copy; {new Date().getFullYear()} Isabelle Institut. Tous droits réservés.</p>
            <p style={{ marginTop: '0.5rem' }}>Design & Développement par Antigravity</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
