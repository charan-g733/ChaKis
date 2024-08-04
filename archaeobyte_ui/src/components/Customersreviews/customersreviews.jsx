import React, { useState, useEffect } from "react";
import "./customersreviews.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const reviews = [
  {
    id: 1,
    text: "It was really good to move with you for one month. I learned new things and I pushed my limits to complete the project. I really love your way of dealing with us (students). I'll appreciate our Mentor sir. I hope you'll reach heights if you continue like this.",
    author: "POTHANABOINA THARUN KUMAR",
    img: "images/umak.jpg",
  },
  {
    id: 2,
    text: "It was a great experience working on the project. Thanks for the help throughout the completion of project. Your help and suggestions helped me to complete the project.",
    author: "Annam Sai Shivani",
    img: "images/umak.jpg",
  },
  {
    id: 3,
    text: "I had a wonderful experience working with @DevElet, it boosted my confidence, and I'm thankful for the mentorship and guidance I received during my time as an intern. I'm looking forward to working with you again.",
    author: "SANGANI HEPSIBA",
    img: "images/umak.jpg",
  },
  {
    id: 4,
    text: "Thank you for giving me this opportunity. I am very grateful for your support and guidance throughout this journey.",
    author: "AMALLA PAVALIKA",
    img: "images/umak.jpg",
  },
  {
    id: 5,
    text: "It is really a very great opportunity for the freshers. Thank you DevElet Team😊.",
    author: "Sambaru Srinath ",
    img: "images/umak.jpg",
  },
  {
    id: 6,
    text: "I got various ideas on technology which I worked here. I can do a project on my own. The teaching skills are very good for gaining knowledge quickly.",
    author: "H PRIJWAL REDDY ",
    img: "images/umak.jpg",
  },
  {
    id: 7,
    text: "Working with DevElet is very impressive and thanks for this opportunity to work with your team. You guys helped me in every aspect to complete my course on time. Once again thanks to the whole team.",
    author: "Kummari Anjali ",
    img: "images/umak.jpg",
  },
  {
    id: 8,
    text: "It was a fascinating experience to work on this internship where I applied my skills and knowledge to making real-time applications. It was a practical approach to improve and work on my skills. Thank you.",
    author: "Kankara Sai Vishnu Vardhan Reddy",
    img: "images/umak.jpg",
  },
  {
    id: 9,
    text: "My internship with AWS provided me with invaluable hands-on experience and insights into cloud computing, which has been instrumental in shaping my understanding of technology.",
    author: "BARMAVATH PRAVALLIKA",
    img: "images/umak.jpg",
  },
];

const CustomersReviews = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewAllPosts = () => {
    navigate('/Feedback Links'); // Redirect to the FeedbackLinks component
  };

  return (
    <div id="customer-reviews" className="review-slider-container-unique-name">
      <div className="review-slider-header-unique-name">
        <h2 className="review-slider-title-unique-name">Our Feedback</h2>
        <p className="review-slider-description-unique-name">
          Up-to-the-minute discussions, straight from the community and
          happening now.
        </p>
        <button 
          className="review-slider-view-all-posts-unique-name"
          onClick={handleViewAllPosts} // Add onClick handler
        >
          View All Posts
        </button>
      </div>
      <div className="review-slider-reviews-container-unique-name">
        <div className="review-slider-review-wrapper-unique-name">
          {reviews.map((review) => (
            <div key={review.id} className="review-slider-review-card-unique-name">
              <img
                src={review.img}
                alt={review.author}
                className="review-slider-author-img-unique-name"
              />
              <div>
                <p className="review-slider-review-text-unique-name">
                  {review.text}
                </p>
                <p className="review-slider-review-author-unique-name">
                  by {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersReviews;
