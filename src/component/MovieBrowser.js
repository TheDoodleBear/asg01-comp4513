import React from "react";
import HeaderApp from "./HeaderApp";
import MovieFavourites from "./MovieFavourites";
import MovieFilters from "./MovieFilters";
import MovieList from "./MovieList";

const MovieBrowser = props => {
  return (
    <main className="h-full">
      <HeaderApp />
      <div className="flex h-full mt-2">
        <MovieFilters movies={props.movies} filterMovie={props.filterMovie} />
        <MovieList
          filterString={props.filterString}
          movies={props.movies}
          filteredMovies={props.filteredMovies}
          selectedMovie={props.showSelectedMovie}
          addFavourites={props.addFavourites}
          sortMovies={props.sortMovies}
        />
        <MovieFavourites
          favourites={props.favourites}
          selectedMovie={props.showSelectedMovie}
          removeFavourites={props.removeFavourites}
        />
      </div>
    </main>
  );
};

export default MovieBrowser;
