import React from 'react';
import { services } from '../data/services';

const Services = () => {
    return (
        <section id="services" className="section bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Nos Soins</h2>
                    <p className="section-subtitle">Découvrez notre gamme complète de prestations pour votre bien-être.</p>
                </div>

                <div className="services-grid">
                    {services.map((category, index) => (
                        <div key={index} className="service-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="service-list">
                                {category.items.map((item, i) => (
                                    <div key={i} className="service-item">
                                        <div className="service-info">
                                            <span className="service-name">{item.name}</span>
                                            {item.duration && <span className="service-duration">{item.duration}</span>}
                                            {item.description && <p className="service-description">{item.description}</p>}
                                        </div>
                                        <div className="service-price">
                                            {item.price} €
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
