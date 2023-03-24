import React from "react";
import {Link} from "react-router-dom";

const MovieFavouriteThumb = props => {
  const imgURL = `https://image.tmdb.org/t/p/w92/`;

  const handleViewClick = () => {
    props.showSelectedMovie(props.favourites.id);
  };

  const removeFav = () => {
    props.removeFavourites(props.favourites);
  };

  const replaceImage = error => {
    // const placeholder = 'https://via.placeholder.com/92'
    //replacement of broken Image
    error.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  };
  return (
    <div className="flex items-center p-3 flex-nowrap group relative ">
      <figure onClick={handleViewClick}>
        <Link to="/moviedetails">
          <img
            src={imgURL + props.favourites.poster}
            alt={props.favourites.title}
            title={props.favourites.title}
            onError={replaceImage}
          />
        </Link>
      </figure>
      <div className="ml-3 static">
        <span>
          {props.favourites.title}
        </span>
      </div>
      <div className="static">
        <button
          className="rounded absolute hidden top-5 right-5 text-slate-100 bg-red-600 border-solid border-slate-300 border-2 w-[25px] h-[25px] group-hover:flex group-hover:items-center group-hover:justify-center"
          onClick={removeFav}
        >
          <h4>x</h4>
        </button>
      </div>
    </div>
  );
};

export default MovieFavouriteThumb;
