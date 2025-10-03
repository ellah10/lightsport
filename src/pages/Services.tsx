import equip_sport from "../assets/boutique.jpg"
import store_jersey from "../assets/maillots_sur_mesure.jpg"
import gestion_pro from "../assets/Gestion de carrière pour sportifs professionnels.jpg"
import training_perso from "../assets/entraînement personnalisé.jpg"
import impression_perso from "../assets/bryan_ls.jpg"

import pic1 from "../assets/elasto.jpg"
import pic2 from "../assets/maillot1.jpg"
import pic3 from "../assets/maillot3.jpg"
import pic4 from "../assets/short.jpg"
import pic5 from "../assets/cullotte.jpg"
import pic6 from "../assets/godasse.jpg"
import pic7 from "../assets/basket2.jpg"
import pic8 from "../assets/ballon.jpg"
import Footer from "../components/Footer"
import FadeInSection from "../components/FadeInSection";


function Services() {
    return (
        <div className="our-services">
            <FadeInSection>
                <div className="equipements">
                    <h1>Services lightsports</h1>
                    <p>votre partenaire pour des équipements sportifs sur-mesure, alliant qualité, style et personnalisation unique.</p>
                    <div className="equipements-items">
                        <div className="equipements-item rev">
                            <img src={equip_sport} className="equip-img" alt="equipements-sportifs" />
                            <div className="desc">
                                <h3>equipements Sportifs</h3>
                                <p>Chez Lightsports, nous vous proposons une sélection complète d’équipements sportifs adaptés à tous les niveaux et toutes les disciplines. Des chaussures performantes aux ballons de qualité professionnelle, en passant par une large gamme d’accessoires, chaque produit est choisi pour offrir confort, durabilité et style. Que vous soyez un athlète débutant, un passionné de sport ou un professionnel en quête de matériel fiable, notre offre vous accompagne dans chaque entraînement, chaque match et chaque compétition, afin que vous puissiez donner le meilleur de vous-même à chaque instant.</p>
                            </div>
                        </div>
                        <div className="equipements-item">
                            <div className="desc">
                                <h3>Maillots sur mesure</h3>
                                <p>Avec Services Chic Maillot, transformez vos équipes en véritables ambassadrices de votre identité sportive grâce à nos maillots personnalisés sur mesure. Nous créons des maillots adaptés aux clubs, écoles, associations et événements sportifs, en respectant vos couleurs, logos et designs spécifiques. Chaque pièce est fabriquée pour offrir un confort optimal, une liberté de mouvement maximale et une durabilité à toute épreuve, tout en mettant en valeur l’image de votre équipe. Que vous soyez un petit club local ou une grande institution sportive, nos maillots sur mesure vous permettent de vous démarquer sur le terrain, de renforcer la cohésion de vos joueurs et de laisser une impression mémorable à chaque match.</p>
                            </div>
                            <img src={store_jersey} className="equip-img" alt="jersey_store" />
                        </div>
                        <div className="equipements-item">
                            <img src={gestion_pro} className="equip-img" alt="jersey_store" />
                            <div className="desc">
                                <h3>Gestion de carrière pour sportifs professionnels</h3>
                                <p>Avec Lightsports, donnez à votre carrière sportive une nouvelle dimension grâce à notre accompagnement personnalisé. Nous aidons les sportifs professionnels à valoriser leur talent, à optimiser leur visibilité et à saisir les meilleures opportunités, que ce soit sur le terrain ou en dehors. Notre équipe met en place des stratégies adaptées à vos objectifs : négociation de contrats, développement d’image, gestion médiatique et préparation à la reconversion. Chaque sportif bénéficie d’un suivi sur mesure, pensé pour renforcer sa performance, sécuriser son avenir et bâtir une carrière durable. Que vous soyez en début de parcours ou déjà confirmé, notre service de gestion de carrière vous permet de rester concentré sur l’essentiel : exceller dans votre discipline.</p>
                            </div>
                        </div>
                        <div className="equipements-item">
                            <div className="desc">
                                <h3>Coaching et entraînement personnalisé</h3>
                                <p>Avec Lightsports, profitez d’un accompagnement sur mesure pour atteindre vos objectifs sportifs. Nos programmes de coaching allient expertise technique, préparation physique et suivi individualisé afin d’optimiser vos performances. Chaque séance est adaptée à votre niveau, à vos besoins et à vos ambitions, qu’il s’agisse d’améliorer vos capacités, de développer votre endurance ou de perfectionner votre technique. Grâce à nos entraîneurs expérimentés, vous bénéficiez d’un encadrement professionnel qui vous motive, vous guide et vous aide à repousser vos limites. Que vous soyez amateur passionné ou athlète confirmé, notre coaching personnalisé vous donne les clés pour progresser efficacement et révéler tout votre potentiel.</p>
                            </div>
                            <img src={training_perso} className="equip-img" alt="jersey_store" />
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="gallerie container">
                    <h3>Gallerie lightsports</h3>
                    <p>Maillots de sport personnalisés et équipements variés pour tous les athlètes</p>
                    <div className="galleie-pic">
                        <img src={pic1} alt="elasto" />
                        <img src={pic2} alt="maillot1" />
                        <img src={pic3} alt="maillot3" />
                        <img src={pic4} alt="short" />
                        <img src={pic5} alt="cullotte" />
                        <img src={pic6} alt="godasse.jpg" />
                        <img src={pic7} alt="basket2" />
                        <img src={pic8} alt="ballon" />
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="jersey container">
                    <h3>Maillots Personnalisés</h3>
                    <p>Équipez vos clubs et écoles avec nos maillots personnalisés et performants.</p>
                    <div className="jersey-items">
                        <div className="jersey-item">
                            <img src={equip_sport} alt="equipement_sportif" />
                            <FadeInSection>
                                <div className="jersey-item-desc">
                                    <h4>Équipements Sportifs</h4>
                                    <p>Explorez notre gamme d’équipements sportifs de qualité, incluant chaussures, ballons et accessoires, pour répondre aux besoins de chaque athlète.</p>
                                </div>
                            </FadeInSection>
                        </div>
                        <div className="jersey-item">
                            <img src={impression_perso} alt="store_jersey" />
                            <FadeInSection>
                                <div className="jersey-item-desc">
                                    <h4>Impression Personnalisée</h4>
                                    <p>Nos services d’imprimerie et de sérigraphie proposent des solutions personnalisées sur différents supports, assurant une qualité d’impression moderne et soignée pour tous vos projets.</p>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <Footer />
        </div>
    );
}
export default Services