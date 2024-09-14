import React from "react";
import "./Movie.css";
const Movie = (props) => {
  const { movie, handleSelectedMovie } = props;
  const { image, episode, movieName, id } = movie;

  return (
    <div className="card" style={{ width: "13rem", height: "24rem" }}>
      <div className="card-image">
        <img
          src={image}
          className="card-img-top"
          data-bs-toggle="modal"
          data-bs-target="#MovieModal"
          alt="..."
          onClick={() => handleSelectedMovie(id)}
        />
        <h5 className="card-title">Episode {episode}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{movieName}</p>
      </div>
    </div>
  );
};

export default Movie;
