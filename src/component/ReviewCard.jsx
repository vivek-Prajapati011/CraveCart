import React from "react";
const ReviewCard = ({name, rating, comment, avatar, date}) => {
    return (
        <div className="review-card-item">
            <div className="review-img">
                <img src={avatar} alt={name} />
            </div>
            <div className="review-info">
                <h3>{name}</h3>
                <div className="rating">⭐ {rating}/5</div>
                <p>{comment}</p>
                <span className="date">{date}</span>
            </div>
        </div>
    );
}
export default ReviewCard