import React, { useState, useEffect } from "react";
import "./customersreviews.css";

const reviews = [
  {
    id: 1,
    text: "How to choose the best pattern to integrate...",
    author: "Jochen Geist",
    img: "images/umak.jpg",
  },
  {
    id: 2,
    text: "2024 MVP and Rising Star nominations are here!",
    author: "Sarah G_",
    img: "images/umak.jpg",
  },
  {
    id: 3,
    text: "Scripts - Background - the upgrade we've been waiting for!",
    author: "Chuck Tomasi",
    img: "images/umak.jpg",
  },
  {
    id: 4,
    text: "Announcement: Chuck Tomasi is Retiring",
    author: "Tomasi",
    img: "images/umak.jpg",
  },
  {
    id: 5,
    text: "New Feature: Live Chat Support",
    author: "G",
    img: "images/umak.jpg",
  },
  {
    id: 6,
    text: "How to optimize your workflow with new tools",
    author: "Jochen Geist",
    img: "images/umak.jpg",
  },
  {
    id: 7,
    text: "Best Practices in Service Management",
    author: "Chu",
    img: "images/umak.jpg",
  },
  {
    id: 8,
    text: "Understanding AI in IT Operations",
    author: "arah",
    img: "images/umak.jpg",
  },
  {
    id: 9,
    text: "Case Study: Successful Digital Transformation",
    author: "Jochen",
    img: "images/umak.jpg",
  },
  {
    id: 10,
    text: "Top 10 Tips for New ServiceNow Users",
    author: "Chuck Tomasi",
    img: "images/umak.jpg",
  },
];


const CustomersReviews = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getDisplayedReviews = () => {
    const endIndex = startIndex + 3;
    if (endIndex <= reviews.length) {
      return reviews.slice(startIndex, endIndex);
    } else {
      return [
        ...reviews.slice(startIndex),
        ...reviews.slice(0, endIndex - reviews.length),
      ];
    }
  };

  const displayedReviews = getDisplayedReviews();

  return (
    <div className="review-slider-container-unique-name">
      <div className="review-slider-title">
        <h2 className="review-slider-title-unique-name">Live topics</h2>
        <p className="review-slider-description-unique-name">
          Up-to-the-minute discussions, straight from the community and
          happening now.
        </p>
        <button className="review-slider-view-all-posts-unique-name">
          View All Posts
        </button>
      </div>
      <div className="review-slider-reviews-container-unique-name">
        {displayedReviews.map((review, index) => (
          <div
            key={review.id}
            className="review-slider-review-card-unique-name"
            style={{ order: index === 1 ? 2 : 1 }}
          >
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
  );
};

export default CustomersReviews;