import React from "react";
import Movie from "./MovieCard/Movie";

const ListMovie = (props) => {
  const { movies = [], handleSelectedMovie } = props;
  const listMovie =
    movies &&
    movies.map((movie) => {
      return (
        <Movie
          movie={movie}
          key={movie.id}
          handleSelectedMovie={handleSelectedMovie}
        />
      );
    });

  return (
    <div className="d-flex align-items-center justify-content-between gap-4">
      {listMovie}
    </div>
  );
};

export default ListMovie;
