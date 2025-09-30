import React from 'react'
import real2 from "../assets/real2.jpg"
import Footer from '../components/Footer'
import FadeInSection from "../components/FadeInSection";

function Contact() {
    return (
        <div>
            <div className="contact-inner container">
                <FadeInSection>
                <div className="contact-adress">
                    <div className="adress">
                        <h1>
                            contactez-nous
                        </h1>
                        <p>
                            Prêt à créer votre maillot ou équipement unique ?
                            Contactez-nous dès aujourd’hui pour un devis personnalisé et donnez vie à vos idées.
                        </p>
                        <p>Une question ou un besoin spécifique ? Notre équipe est à votre écoute pour vous conseiller et vous accompagner à chaque étape.
                        </p>
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="prenom">votre prenom</label><br />
                                <input type="text" placeholder='entrez votre prénom ici' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">adresse email*</label><br />
                                <input type="text" placeholder='entrez votre mail ici' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">votre message*</label><br />
                                <textarea name="msg" id="msg"></textarea>
                            </div>
                            <button>envoyer</button>
                        </form>
                    </div>
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37735.97664730399!2d1.224196974981756!3d6.19678042079218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e3ca652d90b1%3A0x15f8342e9b97f5f8!2sOBRIGADO%20HOTEL!5e0!3m2!1sfr!2sus!4v1758972485766!5m2!1sfr!2sus"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map - Obrigado Hotel"
                        ></iframe>
                    </div>
                </div>
                </FadeInSection>
                <FadeInSection>
                <div className="contact-pic">
                    <img src={real2} alt="" />
                </div>
                </FadeInSection>
                <div className="horaire">
                    <h1>Nos horaires</h1>
                    <p>Lundi à Vendredi, De 08h à 17h. Nous vous accueillons durant ces horaires pour répondre à toutes vos questions et vous offrir le meilleur service possible.</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact