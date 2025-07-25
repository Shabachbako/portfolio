import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import './TestimonialSection.css';
import zeedaaImage from '../assets/coco.png';
import chrisImage from '../assets/chrisu.png';

interface Testimonial {
  id: number;
  image: string;
  name: string;
  title: string;
  company: string;
  platform: string;
  dateRange: string;
  testimonialTitle: string;
  description: string;
  rating: number;
}

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    image: zeedaaImage,
    name: "Zeedaa Coco",
    title: "Founder & CEO",
    company: "Glow & Heal Spa",
    platform: "via Instagram DM",
    dateRange: "Jan 10, 2024 - Feb 2, 2024",
    testimonialTitle: "Massage Business Website Launch",
    description:
      "Working with you was absolutely amazing! You helped bring my dream spa website to life. The design is clean, beautiful, and so easy for my customers to book appointments. I’ve already gotten tons of positive feedback from my clients about how professional it looks. Thank you for making the process stress-free!",
    rating: 5,
  },
  {
    id: 2,
    image: chrisImage,
    name: "Chris Emmanuel",
    title: "Event Director",
    company: "Lead Impact Africa",
    platform: "via WhatsApp",
    dateRange: "March 15, 2024 - April 10, 2024",
    testimonialTitle: "Conference Website Delivery",
    description:
      "I couldn’t have asked for a better experience! You built our conference website exactly how we envisioned it — smooth, mobile responsive, and very professional. We had over 500 sign-ups within the first week thanks to how seamless the platform worked. Would highly recommend you to anyone organizing an event!",
    rating: 5,
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % initialTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + initialTestimonials.length) % initialTestimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`glowing-orb ${index < rating ? 'lit-up' : ''}`}
        size={16}
      />
    ));
  };

  return (
    <section className="happy-talk-section">
      <div className="cheerleader-header">
        <span className="small-cheer">PEOPLE SAY NICE THINGS</span>
        <h2 className="big-cheer">Praise Parade</h2>
      </div>

      <div className="compliment-box">
        <div className="flip-buttons">
          <button onClick={prevTestimonial} className="magic-wand">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextTestimonial} className="magic-wand">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="kind-words-container">
          <div
            className="happy-slideshow"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {initialTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="happy-slide">
                <div className="praise-wrapper">
                  <div className="fan-card">
                    <div className="fan-face">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="fan-info">
                      <span className="fan-company">{testimonial.company}</span>
                      <h3 className="fan-name">{testimonial.name}</h3>
                      <p className="fan-title">{testimonial.title}</p>
                    </div>
                  </div>

                  <div className="love-letter">
                    <div className="quote-bubble">
                      <Quote size={120} />
                    </div>
                    <div className="praise-header">
                      <div className="praise-details">
                        <h3 className="praise-title">{testimonial.testimonialTitle}</h3>
                        <p className="praise-meta">
                          {testimonial.platform} - {testimonial.dateRange}
                        </p>
                      </div>
                      <div className="star-party">{renderStars(testimonial.rating)}</div>
                    </div>
                    <p className="sweet-words">{testimonial.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="happy-dots">
          {initialTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`joy-dot ${index === currentIndex ? 'jumping' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
