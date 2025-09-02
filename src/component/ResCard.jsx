import React from "react";
import data from "../data";
const ResCard = (props) => {
    return (
        <div className="resturent-card-container">
            <div className="res-img">
            <img src={props.image} />
            </div>
            <div className="res-info">
            <h2>{props.name}</h2>
            <h3>{props.location}</h3>
            </div>
            <div className="res-details">
            <h2>Average Cost{props.price_for_two}</h2>
            <h3>{props.offer}</h3>
            </div>
            <button>Menu</button>
        </div>

    )
    

}
export default ResCard