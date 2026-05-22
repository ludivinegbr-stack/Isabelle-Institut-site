import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Mariage Champêtre",
            category: "Mariage",
            image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0d616?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Brochure Festival",
            category: "Print",
            image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Site Web Photographe",
            category: "Web",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Faire-part Floral",
            category: "Mariage",
            image: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Menu Élégant",
            category: "Mariage",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Identité Visuelle Expo",
            category: "Print",
            image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="animate-fade-in section">
            <div className="container">
                <h1 className="text-center mb-4">Portfolio</h1>
                <p className="text-center mb-8" style={{ color: '#666' }}>
                    Quelques exemples de mes réalisations.
                </p>

                <div className="grid grid-3">
                    {projects.map((project) => (
                        <div key={project.id} className="portfolio-item">
                            <img
                                src={project.image}
                                alt={project.title}
                            />
                            <div className="portfolio-overlay">
                                <h3 className="mb-2" style={{ color: 'white' }}>{project.title}</h3>
                                <span className="tag">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
