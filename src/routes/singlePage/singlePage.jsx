import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/slider";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "../../components/map/map";

const singlePage = () => {
  return (
    <div className="singlePage">
      <div className="first">
        <div className="wrapper">
          <Slider key={singlePostData.id} images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="location">
                  <img src="/pin.png" alt="" />
                  <h2>{singlePostData.address}</h2>
                </div>
                <span>$ {singlePostData.price}</span>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="wrapper">
          <div className="title">General</div>
          <div className="detailsVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="textContainer">
                <span>Utilities</span>
                <p>Resnter is responsible.</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="textContainer">
                <span>Pet Policy</span>
                <p>Pets Allowed.</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="textContainer">
                <span>Property Fee's</span>
                <p>Must have 3x in totla household income.</p>
              </div>
            </div>
          </div>
          <div className="title">Room Sizes</div>
          <div className="detailsHorizontal">
            <div className="feature">
              <img src="/size.png" alt="" />
              <div className="textContainer">
                <p>80sqm(861sqft)</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bed.png" alt="" />
              <div className="textContainer">
                <p>2 bed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <div className="textContainer">
                <p>1 bathroom</p>
              </div>
            </div>
          </div>
          <div className="title">Nearby Places</div>
          <div className="detailsHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="textContainer">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="textContainer">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="textContainer">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <div className="title">Location</div>
          <div className="mapContainer">
            <Map item={[singlePostData]} />
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              <span>Send a message</span>
            </button>
            <button>
              <img src="/save.png" alt="" />
              <span>Save the Place</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singlePage;
