import React from "react";
import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import * as cloneDeep from "lodash/cloneDeep";
import Home from "./component/Home.js";
import LoadingIndicator from "./component/LoadingIndicator.js";
import MovieBrowser from "./component/MovieBrowser.js";
import MovieDetails from "./component/MovieDetails.js";

function App() {
  //  Define variable states
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  //  Fetching movies data.
  useEffect(
    () => {
      const url =
        "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=200";
      //  Check if movies array is empty
      if (movies.length <= 0) {
        // Retrieve data from localStorage
        const isLocalData = localStorage.getItem("key");
        // Check if data exists
        if (isLocalData) {
          // If exists load data to cache
          console.log("Retrieving data from local storage");
          const data = JSON.parse(isLocalData);
          setMovies(data);
          //  This will close the loading animation screen
          setLoading(true);
        } else {
          //  Fetch Data from API if local data doesn't exist
          console.log("Local storage empty. Fetching data remotely");
          fetch(url).then(resp => resp.json()).then(data => {
            localStorage.setItem("key", JSON.stringify(data));
            setMovies(data);
            //  This will close the loading animation screen
            setLoading(true);
          });
        }
      }
    },
    [movies, loading]
  );
  // Add Movies to Favourites
  const [favourites, setfavourites] = useState([]);
  const addFavourites = movie => {
    const copyFavs = cloneDeep(favourites);
    let found = copyFavs.find(p => p.id === movie.id);
    if (found) return;
    copyFavs.push(movie);
    setfavourites(copyFavs);
  };

  // Add Remove to Favourites
  const removeFavourites = movies => {
    let filteredFavs = favourites.filter(p => p.id !== movies.id);
    setfavourites(filteredFavs);
  };

  // Set movie to be shown on MovieDetails component
  const [selectedMovie, setselectedMovie] = useState(0);
  const showSelectedMovie = id => {
    setselectedMovie(id);
  };

  //  Manage filtering of Movies
  const [filteredMovies, setFilteredMovies] = useState([]);
  const filterMovie = (movie, string, category) => {
    let moviesToFilter = cloneDeep(movie);
    //  If String is empty pass unfiltered movies back
    if (string === "") {
      setFilteredMovies(movie);
    } else {
      //  If the string is not empty filter movies based on string passed
      switch (category) {
        case "title":
          moviesToFilter = moviesToFilter.filter(m =>
            m.title.toString().toLowerCase().includes(string)
          );
          // Update moviesToPass state with filtered movies
          setFilteredMovies(moviesToFilter);
          break;
        case "genre":
          let removeNullValues = moviesToFilter.filter(
            x => x.details.genres !== null
          );
          moviesToFilter = removeNullValues.filter(m =>
            m.details.genres.find(x => x.name === string)
          );
          setFilteredMovies(moviesToFilter);
          break;
        case "yearLess":
          moviesToFilter = moviesToFilter.filter(
            m => m.release_date.substring(4, 0) < string
          );
          // Update moviesToPass state with filtered movies
          setFilteredMovies(moviesToFilter);
          break;
        case "yearGreater":
          moviesToFilter = moviesToFilter.filter(
            m => m.release_date.substring(4, 0) > string
          );
          // Update moviesToPass state with filtered movies
          setFilteredMovies(moviesToFilter);
          break;
        case "ratingLess":
          moviesToFilter = moviesToFilter.filter(
            m => m.ratings.average / 2 < string
          );
          // Update moviesToPass state with filtered movies
          setFilteredMovies(moviesToFilter);
          break;
        case "ratingGreater":
          moviesToFilter = moviesToFilter.filter(
            m => m.ratings.average / 2 > string
          );
          // Update moviesToPass state with filtered movies
          setFilteredMovies(moviesToFilter);
          break;
        default:
          setFilteredMovies(moviesToFilter);
      }
    }
  };

  const sortMovies = (movie, category, order) => {
    let sorted = cloneDeep(movie);
    switch (category) {
      case "title":
        if (order) {
          sorted = sorted.sort(
            (a, b) => (a.title.toString() < b.title.toString() ? -1 : 1)
          );
        } else {
          sorted = sorted.sort(
            (a, b) => (a.title.toString() > b.title.toString() ? -1 : 1)
          );
        }
        break;
      case "year":
        if (order) {
          sorted = sorted.sort(
            (a, b) =>
              a.release_date.substring(4, 0) < b.release_date.substring(4, 0)
                ? -1
                : 1
          );
        } else {
          sorted = sorted.sort(
            (a, b) =>
              a.release_date.substring(4, 0) > b.release_date.substring(4, 0)
                ? -1
                : 1
          );
        }
        break;
      case "rating":
        if (order) {
          sorted = sorted.sort(
            (a, b) => (a.ratings.average / 2 < b.ratings.average / 2 ? -1 : 1)
          );
        } else {
          sorted = sorted.sort(
            (a, b) => (a.ratings.average / 2 > b.ratings.average / 2 ? -1 : 1)
          );
        }
        break;
      case "popularity":
        if (order) {
          sorted = sorted.sort(
            (a, b) => (a.ratings.popularity < b.ratings.popularity ? -1 : 1)
          );
        } else {
          sorted = sorted.sort(
            (a, b) => (a.ratings.popularity > b.ratings.popularity ? -1 : 1)
          );
        }
        break;
      default:
        sorted = movie;
    }
    setFilteredMovies(sorted);
  };

  // Check if data is being retrieved
  if (!loading) {
    // Show loading screen if true
    return (
      <div className="h-full App">
        <LoadingIndicator />
        {/* <DynamicStarRating /> */}
      </div>
    );
  } else {
    return (
      <div className="h-full App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                movies={movies}
                filteredMovies={filteredMovies}
                filterMovie={filterMovie}
              />
            }
          />
          <Route
            exact
            path="/home"
            element={
              <Home
                movies={movies}
                filteredMovies={filteredMovies}
                filterMovie={filterMovie}
              />
            }
          />
          <Route
            exact
            path="/moviebrowser"
            element={
              <MovieBrowser
                movies={movies}
                favourites={favourites}
                filteredMovies={filteredMovies}
                showSelectedMovie={showSelectedMovie}
                removeFavourites={removeFavourites}
                addFavourites={addFavourites}
                filterMovie={filterMovie}
                sortMovies={sortMovies}
              />
            }
          />
          <Route
            exact
            path="/moviedetails"
            element={
              <MovieDetails
                movies={movies}
                favourites={favourites}
                selectedMovie={selectedMovie}
                removeFavourites={removeFavourites}
                addFavourites={addFavourites}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
