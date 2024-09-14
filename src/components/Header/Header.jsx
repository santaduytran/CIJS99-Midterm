import React from "react";
import "../Header/Header.css";
const Header = () => {
  return (
    <div className="header">
      <h1>Anonime</h1>
      <p>Home</p>
      <p>Anime List</p>

      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search anime or movie"
        />
      </div>
    </div>
  );
};

export default Header;
