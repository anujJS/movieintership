import React, { useContext } from "react";
import Movie from "./Movie";
import { CartContext } from "../context/CartContext.js";

const Movies = () => {
  const { movies } = useContext(CartContext);

  return (
    <div className="container my-3">
      <div className="container">
        <div className="row">
          {movies.map((element) => {
            return (
              <div className="col-md-4" key={element.show.id}>
                <Movie userInfo={element.show} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
