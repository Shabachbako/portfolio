import React from 'react';
import './PricingPlans.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const plans = [
  {
    title: 'Starter',
    price: '₦50,000',
    features: [
      { text: '1 Page Website', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Basic SEO Setup', included: false },
      { text: 'Admin Dashboard', included: false },
    ],
  },
  {
    title: 'Professional',
    price: '₦100,000',
    features: [
      { text: 'Up to 5 Pages', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Basic SEO Setup', included: true },
      { text: 'Admin Dashboard', included: false },
    ],
  },
  {
    title: 'Business Pro',
    price: '₦200,000',
    features: [
      { text: 'Up to 10 Pages', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Advanced SEO & Analytics', included: true },
      { text: 'Admin Dashboard', included: true },
    ],
  },
];

const PricingPlans = () => {
  return (
    <section id="pricing" className="pricing-section">
      <h2 className="sub-heading">Choose Yours</h2>
      <h1 className="main-heading">Affordable Web Development Plans</h1>
      <p className="description">
        Get a professional website tailored to your needs — from simple landing pages to full business platforms.
      </p>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div className="card" key={index}>
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <p className="per-month">One-Time Payment</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx} className={feature.included ? 'included' : 'not-included'}>
                  {feature.included ? <FaCheckCircle className="icon" /> : <FaTimesCircle className="icon" />}
                  {feature.text}
                </li>
              ))}
            </ul>
            <a href="#contact" className="join-btn">GET STARTED</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
