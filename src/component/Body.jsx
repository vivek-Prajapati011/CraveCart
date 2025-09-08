import React, { useEffect, useState } from "react";
import data from "../data";
import ResCard from "./ResCard";
import Footer from "./Footer";
import ReviewCard from "./ReviewCard";
import MenuCard from "./MenuCard";
const Body = () => {
   const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  
  return (
    <div className="conatiner">
      <div className="resturent-card">
        {data[0].restaurants.map((items) => {
          return (
            <>
              <ResCard
                key={items.id}
                name={items.name}
                rating={items.rating}
                offer={items.offer}
                location={items.location}
                image={items.image}
                price_for_two={items.price_for_two}
                onOpenMenu={() => setSelectedRestaurant(items.id)}
              />
              {selectedRestaurant === items.id && (
                <div className="menu-card-box">
                  {items.menu.map((item) => (
                    <MenuCard
                      key={item.id}
                      name={item.name}
                      rating={item.rating}
                      description={item.description}
                      image={item.image}
                      price={item.price}
                    />
                  ))}
                </div>
              )}
            </>
          );
        })} 
      </div>
      <div className="review-card">
        <h2>Customer Reviews</h2>
        {data[0].restaurants
          .filter(restaurant => restaurant.review)
          .flatMap(restaurant => 
            restaurant.review.map(review => ({
              ...review,
              uniqueKey: `${restaurant.id}-${review.id}`
            }))
          )
          .map((review) => (
            <ReviewCard
              key={review.uniqueKey}
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
