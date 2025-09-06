import React, { useEffect } from "react";
import data from "../data";
import ResCard from "./ResCard";
import Footer from "./Footer";
import ReviewCard from "./ReviewCard";
const Body = () => {
  return (
    <div className="conatiner">
      <div className="resturent-card">
        {data[0].restaurants.map((items) => {
          return (
            <ResCard
              key={items.id}
              name={items.name}
              rating={items.rating}
              offer={items.offer}
              location={items.location}
              image={items.image}
              price_for_two={items.price_for_two}
            />
          );
        })} 
      </div>
      <div className="review-card">
        <h2>Customer Reviews</h2>
        {data[0].restaurants[0].review.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            rating={review.rating}
            comment={review.comment}
            avatar={review.avatar}
            date={review.date}
          />
        ))}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default Body;
