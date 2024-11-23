import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`${item.id}`} className="imgContainer">
        <img src={item.img} alt="Image Of the Suit" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="bedroom">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} Bedrooms</span>
            </div>
            <div className="bathroom">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} Bathrooms</span>
            </div>
          </div>
          <div className="icons">
            <img src="/save.png" alt="" />
            <img src="/chat.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
