import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-title">
                        <span>Depuis 2005</span>
                        <h2>Chez<br />Isabelle Institut</h2>
                    </div>

                    <div className="about-visuals">
                        <img src="/circle_mask.png" alt="Soin visage" className="circle-img img-1" />
                        <img src="/circle_waxing.png" alt="Épilation" className="circle-img img-2" />
                    </div>

                    <div className="about-text" style={{ maxWidth: '700px', marginTop: 'var(--spacing-sm)' }}>
                        <p>
                            Plongez dans un univers dédié à la beauté des femmes.
                            Isabelle vous accueille dans un cadre chaleureux pour des soins personnalisés
                            alliant expertise technique et relaxation profonde.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
