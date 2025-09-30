import React from "react";
import Slider from "react-slick"; // carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person from "../assets/person1.jpeg"
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.jpg"

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Dupont",
    role: "Étudiante",
    comment: "Un service incroyable, rapide et efficace !",
    image: person,
  },
  {
    id: 2,
    name: "Karim Yao",
    role: "Entrepreneur",
    comment: "Je recommande vivement, super expérience !",
    image: person2,
  },
  {
    id: 3,
    name: "Sophie Martin",
    role: "Sportive",
    comment: "Les produits sont de qualité, livraison parfaite.",
    image: person3,
  },
];

const TestimonialCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-2xl mx-auto py-8 testimonial-card">
      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t.id} className="text-center p-6">
            <img
              src={t.image}
              alt={t.name}
              className="avatar"
            />
            <p className="italic text-gray-600 mb-2">“{t.comment}”</p>
            <h4 className="font-bold text-lg">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.role}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
