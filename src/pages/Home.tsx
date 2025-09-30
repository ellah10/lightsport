import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";
import jerseyPic from "../assets/soccer.jpg";
import customJersey from "../assets/ls2.jpg";
import equipement from "../assets/equipement.jpg"
import impression from "../assets/ls1.jpg"
import kit from "../assets/ls13.jpg"
import real1 from "../assets/ls9.jpg";
import real2 from "../assets/ls12.jpg";
import real3 from "../assets/ls11.jpg";
import real4 from "../assets/ls7.jpg";
import real5 from "../assets/ls8.jpg";
import real6 from "../assets/ls1.jpg";
import real7 from "../assets/ls14.jpg";
import real8 from "../assets/ls2.jpg";
import { ArrowRight } from 'lucide-react';
import FadeInSection from "../components/FadeInSection";

function Home() {
    return (
        <div>
            <FadeInSection>
                <div className="banner">
                    <img src={jerseyPic} alt="jerseyPic" className='banner-pic' />
                    <div className="banner-text">
                        <h1>Bienvenue dans l’univers des maillots sportifs sur mesure !</h1>
                        <p>Depuis 2004, nous créons des maillots personnalisés et des équipements sportifs de qualité, alliant savoir-faire artisanal et technologies modernes. Notre atelier, au cœur du Togo, conçoit des produits répondant aux standards internationaux tout en célébrant fièrement l’identité et les couleurs africaines.</p>
                        <button className="banner-btn">
                            <span>
                                en savoir plus
                            </span>
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="service container">
                    <h2>Nos services</h2>
                    <p>Explorez notre large éventail de solutions sportives, conçues pour répondre à tous vos besoins et vous accompagner dans vos performances</p>
                    <div className="service-items">
                        <div className="item">
                            <div className="item-image">
                                <img src={customJersey} alt="customJersey" />
                            </div>
                            <div className="item-text">
                                <h3>Maillots sur mesure</h3>
                                <p>Création et fabrication de maillots personnalisés pour équipes sportives, clubs et événements, alliant style, confort et performance.</p>
                                <button className="more-btn">
                                    <span>
                                        en savoir plus
                                    </span>
                                    <ArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={equipement} alt="equipement" />
                            </div>
                            <div className="item-text">
                                <h3>Matériel sportif de qualité</h3>
                                <p>Une vaste sélection de chaussures, ballons, accessoires et équipements, conçus pour tous les sports et tous les niveaux.</p>
                                <button className="more-btn">
                                    <span>
                                        en savoir plus
                                    </span>
                                    <ArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={impression} alt="serigraphie" />
                            </div>
                            <div className="item-text">
                                <h3>Personnalisation par impression et sérigraphie</h3>
                                <p>Services professionnels d’impression sur textiles, objets promotionnels et supports publicitaires, pour mettre en valeur votre marque avec style et qualité.</p>
                                <button className="more-btn">
                                    <span>
                                        en savoir plus
                                    </span>
                                    <ArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={kit} alt="kitComplet" />
                            </div>
                            <div className="item-text">
                                <h3>Kits complets</h3>
                                <p>maillots, shorts et chaussettes assortis pour un style uniforme</p>
                                <button className="more-btn">
                                    <span>
                                        en savoir plus
                                    </span>
                                    <ArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>

                <div className="realisations container">
                    <h2>Nos Réalisations</h2>
                    <p>Découvrez nos créations les plus impressionnantes, où style, qualité et personnalisation se rencontrent. Cliquez et laissez-vous inspirer !</p>
                    <div className="real-items">
                        <img src={real1} alt="real1" />
                        <img src={real2} alt="real2" />
                        <img src={real3} alt="real3" />
                        <img src={real4} alt="real4" />
                        <img src={real5} alt="real5" />
                        <img src={real6} alt="real6" />
                        <img src={real7} alt="real6" />
                        <img src={real8} alt="real6" />
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="testimonial container">
                    <h1>temoingnages</h1>
                    <p>
                        L’expérience unique que nos clients et partenaires partagent
                    </p>
                    <TestimonialCarousel />
                </div>
            </FadeInSection>
            <Footer />
        </div>
    )
}

export default Home