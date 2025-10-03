import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";


import customJersey from "../assets/ls2.jpg";
import equipement from "../assets/materiel_sportif.jpg";
import impression from "../assets/serigraphie.jpg";
import kit from "../assets/ls13.jpg";


interface Service {
    label: string;
    image: string;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        label: "Maillots sur mesure",
        image: customJersey,
        title: "Maillots sur mesure",
        description: "Création et fabrication de maillots personnalisés pour équipes sportives, clubs et événements, alliant style, confort et performance."
    },
    {
        label: "Matériel sportif",
        image: equipement,
        title: "Matériel sportif de qualité",
        description: "Une vaste sélection de chaussures, ballons, accessoires et équipements, conçus pour tous les sports et tous les niveaux."
    },
    {
        label: "Impression et sérigraphie",
        image: impression,
        title: "Personnalisation par impression et sérigraphie",
        description: "Services professionnels d’impression sur textiles, objets promotionnels et supports publicitaires, pour mettre en valeur votre marque avec style et qualité."
    },
    {
        label: "Kits complets",
        image: kit,
        title: "Kits complets",
        description: "Maillots, shorts et chaussettes assortis pour un style uniforme."
    },
];

const ServicesTabs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [springs, api] = useSpring(() => ({
        opacity: 0,
        transform: "translateY(20px)",
    }));

    useEffect(() => {
        api.start({ opacity: 1, transform: "translateY(0px)" });
    }, [activeIndex, api]);

    return (
        <div className="service container">
            <h2>Nos services</h2>
            <p>Explorez notre large éventail de solutions sportives, conçues pour répondre à tous vos besoins et vous accompagner dans vos performances</p>

            <div className="tab-buttons">
                {services.map((service, index) => (
                    <button
                        key={index}
                        className={`tab-btn ${activeIndex === index ? "active-tab" : ""}`}
                        onClick={() => setActiveIndex(index)}>
                        {service.label}
                    </button>
                ))}
            </div>
            <animated.div className="tab-content" style={springs}>
                <div className="item">
                    <div className="item-image">
                        <img src={services[activeIndex].image} alt={services[activeIndex].title} />
                    </div>
                    <div className="item-text">
                        <h3>{services[activeIndex].title}</h3>
                        <p>{services[activeIndex].description}</p>
                        <button className="more-btn">
                            <span>En savoir plus</span>
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </animated.div>
        </div>
    );
}
export default ServicesTabs
