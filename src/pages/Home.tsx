import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";
import jerseyPic from "../assets/soccer.jpg";
import customJersey from "../assets/ls2.jpg";
import equipement from "../assets/materiel_sportif.jpg"
import impression from "../assets/serigraphie.jpg"
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
import ServicesTabs from "../components/ServicesTabs";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/about");
    };

    return (
        <div>
            <FadeInSection>
                <div className="banner">
                    <div className="banner-overlay"></div>
                    <div className="banner-text">
                        <h1>Bienvenue dans l’univers des maillots sportifs sur mesure !</h1>
                        <p>Chez LIGHTSPORTS, nous offrons aux sportifs des produits et services alliant style, performance et professionnalisme,du design d’équipements au coaching et à l’accompagnement de carrière.</p>
                        <button className="banner-btn" onClick={handleClick}>
                            <span>
                                en savoir plus
                            </span>
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <ServicesTabs />
            </FadeInSection>
            <FadeInSection>
                <div className="realisations container">
                    <h2>Notre Catalogue</h2>
                    <p>Découvrez nos créations les plus impressionnantes, où style, qualité et personnalisation se rencontrent. Cliquez et laissez-vous inspirer !</p>
                    <div className="real-items">
                        <div className="item">
                            <img src={real1} alt="real1" />
                        </div>
                        <div className="item">
                            <img src={real2} alt="real2" />
                        </div>
                        <div className="item">
                            <img src={real3} alt="real3" />
                        </div>
                        <div className="item">
                            <img src={real4} alt="real4" />
                        </div>
                        <div className="item">
                            <img src={real5} alt="real5" />
                        </div>
                        <div className="item">
                            <img src={real6} alt="real6" />
                        </div>
                        <div className="item">
                            <img src={real7} alt="real6" />
                        </div>
                        <div className="item">
                            <img src={real8} alt="real6" />
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="testimonial container">
                    <h1>temoignages</h1>
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