import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="animate-fade-in section">
            <div className="container">
                <h1 className="text-center mb-8">Me Contacter</h1>

                <div className="grid grid-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Contact Info */}
                    <div>
                        <h2 className="mb-6">Parlons de votre projet</h2>
                        <p className="mb-8" style={{ color: '#666' }}>
                            Vous avez une idée ? Un projet de mariage ou de communication en tête ?
                            Je serais ravie d'échanger avec vous.
                        </p>

                        <div className="flex flex-col gap-4 mb-8">
                            <div className="flex items-center">
                                <Mail className="mr-3" style={{ color: 'var(--color-primary)' }} />
                                <div>
                                    <h3 className="mb-0" style={{ fontSize: '1rem' }}>Email</h3>
                                    <a href="mailto:pollycommunication@gmail.com" style={{ color: '#666' }}>pollycommunication@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Phone className="mr-3" style={{ color: 'var(--color-primary)' }} />
                                <div>
                                    <h3 className="mb-0" style={{ fontSize: '1rem' }}>Téléphone</h3>
                                    <p style={{ color: '#666' }}>06.48.55.14.64</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <MapPin className="mr-3" style={{ color: 'var(--color-primary)' }} />
                                <div>
                                    <h3 className="mb-0" style={{ fontSize: '1rem' }}>Localisation</h3>
                                    <p style={{ color: '#666' }}>France (Disponible à distance)</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4" style={{ fontSize: '1.2rem' }}>Retrouvez-moi sur les réseaux</h3>
                            <div className="social-links">
                                <a href="https://www.instagram.com/pollycommunication/" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ color: '#333', background: '#eee', padding: '0.75rem', borderRadius: '50%', display: 'inline-flex' }}>
                                    <Instagram size={24} />
                                </a>
                                <a href="mailto:pollycommunication@gmail.com" className="social-btn" style={{ color: '#333', background: '#eee', padding: '0.75rem', borderRadius: '50%', display: 'inline-flex' }}>
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card" style={{ borderTop: '4px solid var(--color-primary)' }}>
                        <form>
                            <div className="form-row form-group">
                                <div style={{ flex: 1 }}>
                                    <label htmlFor="firstname" className="form-label">Prénom</label>
                                    <input type="text" id="firstname" className="form-input" placeholder="Votre prénom" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label htmlFor="lastname" className="form-label">Nom</label>
                                    <input type="text" id="lastname" className="form-input" placeholder="Votre nom" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-input" placeholder="votre@email.com" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">Sujet</label>
                                <select id="subject" className="form-select">
                                    <option>Mariage / Faire-part</option>
                                    <option>Identité visuelle / Logo</option>
                                    <option>Site Web</option>
                                    <option>Supports imprimés (Flyers, etc.)</option>
                                    <option>Autre</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea id="message" rows="5" className="form-textarea" placeholder="Dites-moi tout sur votre projet..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Envoyer le message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
