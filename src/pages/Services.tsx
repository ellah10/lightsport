import equip_sport from "../assets/real-jersey.jpg"
import store_jersey from "../assets/jersey-storeb.jpg"
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/pic5.jpg"
import pic6 from "../assets/pic6.jpg"
import pic7 from "../assets/pic7.jpg"
import pic8 from "../assets/pic8.jpg"
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
                                <p>Chez Services Chic Maillot, nous vous proposons une sélection complète d’équipements sportifs adaptés à tous les niveaux et toutes les disciplines. Des chaussures performantes aux ballons de qualité professionnelle, en passant par une large gamme d’accessoires, chaque produit est choisi pour offrir confort, durabilité et style. Que vous soyez un athlète débutant, un passionné de sport ou un professionnel en quête de matériel fiable, notre offre vous accompagne dans chaque entraînement, chaque match et chaque compétition, afin que vous puissiez donner le meilleur de vous-même à chaque instant.</p>
                            </div>
                        </div>
                        <div className="equipements-item">
                            <div className="desc">
                                <h3>Maillots sur mesure</h3>
                                <p>Avec Services Chic Maillot, transformez vos équipes en véritables ambassadrices de votre identité sportive grâce à nos maillots personnalisés sur mesure. Nous créons des maillots adaptés aux clubs, écoles, associations et événements sportifs, en respectant vos couleurs, logos et designs spécifiques. Chaque pièce est fabriquée pour offrir un confort optimal, une liberté de mouvement maximale et une durabilité à toute épreuve, tout en mettant en valeur l’image de votre équipe. Que vous soyez un petit club local ou une grande institution sportive, nos maillots sur mesure vous permettent de vous démarquer sur le terrain, de renforcer la cohésion de vos joueurs et de laisser une impression mémorable à chaque match.</p>
                            </div>
                            <img src={store_jersey} className="equip-img" alt="jersey_store" />
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="gallerie container">
                    <h3>Gallerie lightsport</h3>
                    <p>Maillots de sport personnalisés et équipements variés pour tous les athlètes</p>
                    <div className="galleie-pic">
                        <img src={pic1} alt="pic1" />
                        <img src={pic2} alt="pic2" />
                        <img src={pic3} alt="pic3" />
                        <img src={pic4} alt="pic4" />
                        <img src={pic5} alt="pic5" />
                        <img src={pic6} alt="pic6" />
                        <img src={pic7} alt="pic7" />
                        <img src={pic8} alt="pic8" />
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
                            <img src={store_jersey} alt="store_jersey" />
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