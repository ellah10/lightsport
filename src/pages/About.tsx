import mission_pic from "../assets/ls14.jpg";
import Footer from '../components/Footer';
import FadeInSection from "../components/FadeInSection";

function About() {
    return (
        <div className='our-mission'>
            <FadeInSection>
                <div className="mission container">
                    <div className="mission-desc">
                        <h1>Notre mission</h1>
                        <p>
                            Donner vie à la passion du sport
                            Le sport, bien plus qu’une activité, est un langage universel qui rassemble, inspire et transmet des valeurs de dépassement et de solidarité. Chez nous, chaque maillot, chaque équipement est bien plus qu’un simple produit : c’est un symbole d’identité, de fierté et d’appartenance.
                            Notre mission est de mettre l’innovation et la créativité au service des athlètes, des clubs et des passionnés. Grâce à la personnalisation, nous donnons à chacun la possibilité de porter ses couleurs, de faire rayonner son équipe et d’affirmer son style sur et en dehors du terrain.
                            Nous croyons que chaque détail compte et que la qualité, alliée à la passion, peut transformer un simple équipement en véritable moteur de performance et de motivation.
                        </p>
                    </div>
                    <div className="mission-image">
                        <img src={mission_pic} alt="mission" />
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="process container">
                    <h1>Notre Processus de Création</h1>
                    <p>Un processus éprouvé en 4 étapes pour garantir la qualité et votre satisfaction</p>
                    <div className="process-items">
                        <div className="process-item">
                            <span>1</span>
                            <h3>Consultation et Design</h3>
                            <p>
                                Échange sur vos besoins
                                Un processus éprouvé en 4 étapes pour garantir la qualité et votre satisfaction
                                Création du design personnalisé
                                Et validation du conception
                            </p>
                            <h3>1-2 Jours</h3>
                        </div>
                        <div className="process-item">
                            <span>2</span>
                            <h3>Choix des Matériaux</h3>
                            <p>
                                Sélection des tissus, couleurs et finitions adaptés à votre budjet
                            </p>
                            <h3>1 Jour</h3>
                        </div>
                        <div className="process-item">
                            <span>3</span>
                            <h3>Production</h3>
                            <p>
                                Fabrication de vos maillots dans notre atelier avec un suivi en temps réel.
                            </p>
                            <h3>5-6 Jours</h3>
                        </div>
                        <div className="process-item">
                            <span>4</span>
                            <h3>Contrôle Qualité et Livraison</h3>
                            <p>
                                Vérification minutieuse de chaque pièce et livraison sécurisée
                            </p>
                            <h3>1-3 Jours</h3>
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <Footer />
        </div>
    )
}

export default About