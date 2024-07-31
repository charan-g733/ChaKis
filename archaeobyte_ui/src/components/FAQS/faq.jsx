import React, { useState } from 'react';
import './faq.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows returns within 30 days of purchase.'
    },
    {
      question: 'How do I track my order?',
      answer: 'You can track your order using the tracking link sent to your email.'
    },
    {
      question: 'Can I purchase items in bulk?',
      answer: 'Yes, we offer bulk purchasing options. Please contact our sales team for more information.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="unique-faq-container">
      <h2 className="unique-faq-title">Frequently Asked Questions</h2>
      <div className="unique-faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="unique-faq-item">
            <div className="unique-faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            <div className={`unique-faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
