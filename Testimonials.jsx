import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Carine Ollivier",
        text: "J'ai passé un très agréable moment avec Isabelle! C'était un cadeau pour mon anniversaire 🥳 Je vous recommande vivement cette dame aux doigts de fée 🧚",
        rating: 5
    },
    {
        name: "Fabienne LECOT",
        text: "Moment formidable.. avec Isabelle esthéticienne à Gouaix.. je vais y retourner avec plaisir",
        rating: 5
    },
    {
        name: "Dany Dernois",
        text: "Depuis 15 ans que je vais chez Isabelle Institut c'est toujours aussi bien je dirais que c'est de mieux en mieux j'aime beaucoup sa façon de travailler.",
        rating: 5
    },
    {
        name: "Yamina Marteau",
        text: "Aimable, Gentillesse et très agréable.",
        rating: 5
    },
    {
        name: "Flochupetta",
        text: "Top !",
        rating: 5
    }
];

// Double the list for seamless infinite scroll
const scrollList = [...testimonials, ...testimonials];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section bg-white overflow-hidden">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Avis Clients</h2>
                    <p className="section-subtitle">Ce que disent nos clientes</p>
                </div>
            </div>

            <div className="scrolling-wrapper">
                <div className="scrolling-container">
                    {scrollList.map((item, index) => (
                        <div key={index} className="testimonial-bubble">
                            <div className="stars">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={14} fill="#B89F91" color="#B89F91" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{item.text}"</p>
                            <h4 className="testimonial-name">{item.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
