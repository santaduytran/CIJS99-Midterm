import React from "react";
import "./Detail.css";

const MovieDetail = (props) => {
  const { movie } = props;
  const { image, description, movieName } = movie;

  return (
    <div
      className="modal fade"
      id="MovieModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Movie Detail
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            <div className="row">
              <h3>{movieName}</h3>

              <div className="col">
                <img src={image} alt="" />
              </div>
              <div className="col" style={{ color: "black" }}>
                {description}
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
