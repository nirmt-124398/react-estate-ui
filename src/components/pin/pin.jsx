import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.scss";

const pin = ({item}) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="pin active">
          <div className="popupContainer">
            <img src={item.img} alt="" />
            <div className="textContainer">
              <Link to={`${item.id}`}>{item.title}</Link>
              <div className="bed">{item.bedroom} bedrooms</div>
              <b>$ {item.price}</b>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default pin;
