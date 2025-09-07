import React from "react";
const MenuCard = ({key, name, price, image, description,rating}) => {
  return (
    <div className="menu-card-container">
        <div className="menu-card">
            <div className="card-img">
                <img src={image} alt={name} />
                <button>ADD</button>
            </div>
            <div className="card-info">
                <h2>{name}</h2>
                <h2>{price}</h2>
                <h2>{rating}</h2>
                <h2>{description}</h2>
            </div>
            

        </div>

    </div>
  )
}
export default MenuCard