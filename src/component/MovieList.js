import React, {useState} from "react";
import MovieListItem from "./MovieListItem";

const MovieList = props => {
  const [sortOrder, setSortOrder] = useState(true);

  const setSortConfig = key => {
    const sortCategory = key;
    if (sortCategory === key && sortOrder) {
        setSortOrder(!sortOrder);
      props.sortMovies(props.filteredMovies, sortCategory, sortOrder);
    } else {
      props.sortMovies(props.filteredMovies, sortCategory, sortOrder);
      setSortOrder(true);
    }
  };

  return (
    <div className="bg-[#279AF1] rounded-t-lg h-full mr-2 ml-2 min-w-[500px] w-full">
      <h1 className="w-full font-mono text-center ">List / Matches</h1>
      <div className="flex flex-col">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="font-mono bg-blue-800 ">
            <tr>
              <th className="text-center">
                <span />
              </th>
              <th className="text-center text-slate-300">
                <button
                  type="button"
                  title="title"
                  onClick={() => setSortConfig("title")}
                >
                  Title
                </button>
              </th>
              <th className="text-center text-slate-300">
                <button
                  type="button"
                  title="year"
                  onClick={() => setSortConfig("year")}
                >
                  Year
                </button>
              </th>
              <th className="text-center text-slate-300">
                <button
                  type="button"
                  title="rating"
                  onClick={() => setSortConfig("rating")}
                >
                  Rating
                </button>
              </th>
              <th className="text-center max-w-[40px] text-slate-300">
                <button
                  type="button"
                  title="popularity"
                  onClick={() => setSortConfig("popularity")}
                >
                  Overall Interest
                </button>
              </th>
              <th className="text-center">
                <span />
              </th>
              <th className="text-center">
                <span />
              </th>
            </tr>
          </thead>
          <tbody>
            {props.filteredMovies?.map((p) =>
                            <MovieListItem 
                            movies={p} 
                            key={p.id} 
                            addFavourites={props.addFavourites}
                            showSelectedMovie={props.selectedMovie} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;
