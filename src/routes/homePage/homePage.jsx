import React from "react";
import "./homePage.scss";
import SearchBar from "../../components/searchbar/searchbar";

const homePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            qui dolorum et dolores fugit porro, ut incidunt minima aspernatur
            quas. Minima, facere. Maxime voluptatum excepturi nemo illum facere
            natus non!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h2>16+</h2>
              <h3>
                Year's of Experience
              </h3>
            </div>
            <div className="box">
              <h2>200</h2>
              <h3>
                Awards Gained
              </h3>
            </div>
            <div className="box">
              <h2>2000+</h2>
              <h3>
                Properties Ready
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Side-Image" />
      </div>
    </div>
  );
};

export default homePage;
