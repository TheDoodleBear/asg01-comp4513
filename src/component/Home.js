import {Link} from "react-router-dom";
import {useState} from "react";
import {cloneDeep} from "lodash";

const Home = props => {
  let imgUrl =
    "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
  const [filterString, setfilterString] = useState("");

  const handleChange = event => {
    const {value} = event.target;
    setfilterString(value);
  };

  const showMatchMovies = e => {
    const movieToFilter = cloneDeep(props.movies);
    if (filterString === "") {
      e.preventDefault();
      alert("Empty Search Parameter. Please Try Again");
    } else {
      props.filterMovie(movieToFilter, filterString, "title");
    }
  };

  const showAllMovies = () => {
    props.filterMovie(props.movies, "", "");
  };

  return (
    <div
      className="grid w-full h-screen font-mono bg-fixed bg-center bg-cover place-items-center "
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    >
      <div className="h-[400px] w-[700px] bg-[#279AF1] rounded-xl">
        <form className="grid w-full h-full place-items-center">
          <h1>Movie Browser</h1>
          <div>
            <label className="mr-3">Title</label>
            <input
              type="text"
              className=" ml-3 w-[400px] h-[35px]"
              onChange={handleChange}
            />
          </div>
          <div>
            <Link to={"/moviebrowser"}>
              <button
                className="bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded mr-3"
                onClick={showMatchMovies}
              >
                Show Matching Movies
              </button>
            </Link>
            <Link to="/moviebrowser">
              <button
                className="bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3"
                onClick={showAllMovies}
              >
                Show All Movies
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
