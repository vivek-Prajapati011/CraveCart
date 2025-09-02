import React, { useEffect } from "react";
import data from "../data";
import ResCard from "./ResCard";
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
    </div>
  );
};
export default Body;
