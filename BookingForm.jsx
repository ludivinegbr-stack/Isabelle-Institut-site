import React, { useState } from 'react';
import { services } from '../data/services';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        treatment: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    // Flatten services for the dropdown
    const allTreatments = services.flatMap(cat => cat.items.map(item => item.name));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate email sending
        console.log('Form data:', formData);
        setSubmitted(true);
        // In a real app, you'd use EmailJS or a backend to send to isabelle.institut77@gmail.com
    };

    if (submitted) {
        return (
            <section id="booking" className="section">
                <div className="container text-center">
                    <div className="confirmation-card">
                        <h2 className="section-title">Merci {formData.name} !</h2>
                        <p>Votre demande de rendez-vous pour <strong>{formData.treatment}</strong> a bien été envoyée.</p>
                        <p>Isabelle vous recontactera très prochainement à l'adresse <strong>{formData.email}</strong> pour confirmer la date.</p>
                        <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => setSubmitted(false)}>
                            Envoyer une autre demande
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="booking" className="section">
            <div className="container">
                <div className="booking-grid">
                    <div className="booking-info">
                        <h2 className="section-title" style={{ marginBottom: '3rem' }}>Prendre Rendez-vous</h2>
                        <p className="mb-4">
                            Remplissez le formulaire ci-dessous pour demander un rendez-vous.
                            Indiquez-nous vos disponibilités dans le message, nous vous répondrons par mail pour confirmer l'horaire.
                        </p>
                        <div className="contact-details">
                            <p><strong>Téléphone :</strong> 06.70.59.71.98</p>
                            <p><strong>Email :</strong> isabelle.institut77@gmail.com</p>
                            <p><strong>Adresse :</strong> 12 grande rue, 77114 Gouaix</p>
                        </div>
                    </div>

                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nom Complet</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Votre nom"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="votre@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Téléphone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    placeholder="06 12 34 56 78"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="treatment">Soin souhaité</label>
                            <select
                                id="treatment"
                                name="treatment"
                                required
                                value={formData.treatment}
                                onChange={handleChange}
                            >
                                <option value="">Sélectionnez un soin</option>
                                {allTreatments.map((t, index) => (
                                    <option key={index} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message (Disponibilités, questions...)</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Ex: Je suis disponible les mardis après-midi..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            Envoyer la demande
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
