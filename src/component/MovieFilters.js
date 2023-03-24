import {cloneDeep} from "lodash";
import React, {useState, useRef} from "react";
import LeftArrow from "./img/left_arrow.png";
import RightArrow from "./img/right_arrow.png";

const MovieFilters = props => {
  const filterDiv = useRef(null);
  let arrowPOS = RightArrow;
  const [sideView, setSideView] = useState(true);
  const [filterProperty, setFilterProperty] = useState(null);
  const [filterString, setfilterString] = useState("");
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [filterCritera, setFilterCriteria] = useState({
    title: "",
    genre: "default",
    yearLess: "",
    yearGreater: "",
    ratingLess: "",
    ratingGreater: ""
  });
  const handleSideBar = () => {
    setSideView(!sideView);
  };

  if (sideView) {
    arrowPOS = RightArrow;
  } else {
    arrowPOS = LeftArrow;
  }

  const submitFilter = e => {
    const movieToFilter = cloneDeep(props.movies);
    props.filterMovie(movieToFilter, filterString, filterProperty);
    e.preventDefault();
  };

  const handleClear = () => {
    const movieToFilter = cloneDeep(props.movies);
    setfilterString("");
    setFilterProperty("");
    setFilterCriteria({
      title: "",
      genre: "default",
      yearLess: "",
      yearGreater: "",
      ratingLess: "",
      ratingGreater: ""
    });
    props.filterMovie(movieToFilter, "", "");
  };

  const onTextBoxChange = e => {
    const {value} = e.target;
    const {name} = e.target;
    switch (name) {
      case "title":
        setFilterCriteria({
          title: value,
          genre: "default",
          yearLess: "",
          yearGreater: "",
          ratingLess: "",
          ratingGreater: ""
        });
        break;
      case "genre":
        setFilterCriteria({
          title: "",
          genre: value,
          yearLess: "",
          yearGreater: "",
          ratingLess: "",
          ratingGreater: ""
        });
        break;
      case "yearLess":
        setFilterCriteria({
          title: "",
          genre: "default",
          yearLess: value,
          yearGreater: "",
          ratingLess: "",
          ratingGreater: ""
        });
        break;
      case "yearGreater":
        setFilterCriteria({
          title: "",
          genre: "default",
          yearLess: "",
          yearGreater: value,
          ratingLess: "",
          ratingGreater: ""
        });
        break;
      case "ratingLess":
        setFilterCriteria({
          title: "",
          genre: "default",
          yearLess: "",
          yearGreater: "",
          ratingLess: value,
          ratingGreater: ""
        });
        break;
      case "ratingGreater":
        setFilterCriteria({
          title: "",
          genre: "default",
          yearLess: "",
          yearGreater: "",
          ratingLess: "",
          ratingGreater: value
        });
        break;
      default:
        setfilterString(value);
        setFilterProperty(name);
        break;
    }
    setfilterString(value);
    setFilterProperty(name);
  };

  const HandleRadioSelect = e => {
    let radioValue = e.target.value;
    setFilterCriteria({
      title: "",
      genre: "default",
      yearLess: "",
      yearGreater: "",
      ratingLess: "",
      ratingGreater: ""
    });
    setSelectedRadio(radioValue);
  };

  const generateDropdown = () => {
    let genre = props.movies.filter(x => x.details.genres !== null);
    let genreName = genre.map(x => x.details.genres);
    let flatGenre = genreName.flat();
    let x = flatGenre.map(x => x.name);
    let g = [...new Set(x)];
    return g;
  };

  const handleSelectChange = e => {
    const {value} = e.target;
    const {name} = e.target;
    setFilterCriteria({
      title: "",
      genre: value,
      yearLess: "",
      yearGreater: "",
      ratingLess: "",
      ratingGreater: ""
    });
    setfilterString(value);
    setFilterProperty(name);
  };

  return (
    <div className="bg-[#279AF1] rounded-t-lg min-h-full flex min-w[20px] max-w-[300px]">
      {sideView &&
        <div className="m-2" ref={filterDiv}>
          <div className="m-2">
            <h1 className="w-full font-mono text-center ">Movie Filters</h1>
          </div>
          <div>
            <form onSubmit={submitFilter}>
              <div className="flex justify-between place-items-center">
                <div>
                  <input
                    name="filterRadio"
                    type="radio"
                    value="titleRadio"
                    onChange={HandleRadioSelect}
                  />
                  <label className="pl-1" htmlFor="title">
                    Title
                  </label>
                </div>
                <input
                  name="title"
                  className="w-[120px] h-[35px] m-1"
                  type={"text"}
                  value={filterCritera.title}
                  disabled={selectedRadio !== "titleRadio"}
                  onChange={onTextBoxChange}
                />
              </div>
              <div className="flex justify-between place-items-center">
                <div>
                  <input
                    name="filterRadio"
                    type="radio"
                    value={"genreRadio"}
                    onChange={HandleRadioSelect}
                  />
                  <label className="pl-1" htmlFor="genreSelect">
                    Genre
                  </label>
                </div>
                <select
                  name="genre"
                  className="w-[120px] h-[35px] m-1"
                  disabled={selectedRadio !== "genreRadio"}
                  value={filterCritera.genre}
                  onChange={handleSelectChange}
                >
                  <option value="default"> </option>
                  {generateDropdown().map((genre, index) =>
                    <option key={index} value={genre}>
                      {genre}
                    </option>
                  )}
                </select>
              </div>
              <div className="flex justify-between place-content-start">
                <div>
                  <input
                    id="year"
                    name="filterRadio"
                    type="radio"
                    value={"yearRadio"}
                    onChange={HandleRadioSelect}
                  />
                  <label className="pl-1" htmlFor="year">
                    Year
                  </label>
                </div>
                <div>
                  <div className="flex justify-between place-items-center">
                    <label htmlFor="yearLess">Less</label>
                    <input
                      name="yearLess"
                      className="w-[100px] h-[35px] m-1"
                      type={"text"}
                      value={filterCritera.yearLess}
                      disabled={selectedRadio !== "yearRadio"}
                      onChange={onTextBoxChange}
                    />
                  </div>
                  <div className="flex justify-between place-items-center">
                    <label htmlFor="yearGreater">Greater</label>
                    <input
                      name="yearGreater"
                      className="w-[100px] h-[35px] m-1"
                      type={"text"}
                      value={filterCritera.yearGreater}
                      disabled={selectedRadio !== "yearRadio"}
                      onChange={onTextBoxChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between place-content-start">
                <div>
                  <input
                    id="rating"
                    name="filterRadio"
                    type="radio"
                    value={"ratingRadio"}
                    onChange={HandleRadioSelect}
                  />
                  <label className="pl-1" htmlFor="rating">
                    Rating
                  </label>
                </div>
                <div>
                  <div className="flex justify-between place-items-center">
                    <label htmlFor="ratingLess">Less</label>
                    <input
                      id="ratingLess"
                      className="w-[100px] h-[35px] m-1"
                      type={"text"}
                      name="ratingLess"
                      value={filterCritera.ratingLess}
                      disabled={selectedRadio !== "ratingRadio"}
                      onChange={onTextBoxChange}
                    />
                  </div>
                  <div className="flex justify-between place-items-center">
                    <label htmlFor="ratingGreater">Greater</label>
                    <input
                      id="ratingGreater"
                      className="w-[100px] h-[35px] m-1"
                      type={"text"}
                      name="ratingGreater"
                      value={filterCritera.ratingGreater}
                      disabled={selectedRadio !== "ratingRadio"}
                      onChange={onTextBoxChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2 ">
                <button
                  type="submit"
                  className="bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded mr-3"
                >
                  Filter
                </button>
                <button
                  onClick={handleClear}
                  className="bg-[#4C5760] hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded mr-3"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>}
      <div
        className="flex h-full bg-slate-300 w-[20px] justify-items-center rounded-tr-lg"
        onClick={handleSideBar}
      >
        <button className="bg-transparent">
          <img src={arrowPOS} alt="Arrow Button" />
        </button>
      </div>
    </div>
  );
};

export default MovieFilters;
