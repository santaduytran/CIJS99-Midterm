import React from "react";
import "./Intro.css";

const HeaderIntro = () => {
  return (
    <div className="header-intro">
      <h3>Explore</h3>
      <h5>What are you watching today?</h5>
      <div className="image">
        <div className="img-content"></div>
        <div className="row">
          <div className="col image-content">
            <h2>Weathering With You</h2>
            <p>
              Weathering with You is a Japanese animated romantic fantasy film.
              It follows a 16-year-old high school boy, Hodaka Morishima, who
              runs away from his troubled rural home to Tokyo, and later
              befriends Hina Amano, an orphaned girl who has the ability to
              control the weather.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderIntro;
