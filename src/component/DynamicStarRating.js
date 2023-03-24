import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

const DynamicStarRating = props => {
  const [starRating, setStarRating] = useState(props.movieRating);
  const [mouseOver, setMouseOver] = useState(null);

  const changeStarRating = value => {
    if (starRating === 0) {
      setStarRating(value);
    }
  };

  return (
    <div className="flex justify-center ">
      <div>
        {[...Array(5)].map((star, i) => {
          const starValue = i + 1;
          return (
            <label key={i}>
              <input
                className="hidden"
                type="radio"
                name="starRating"
                value={starValue}
                onClick={() => changeStarRating(starValue)}
              />
              <FaStar
                size={25}
                className={starRating === 0 ? "cursor-pointer" : ""}
                color={
                  starValue <= (mouseOver || starRating) ? "#ffC107" : "#e4e5e9"
                }
                onMouseEnter={() =>
                  starRating === 0
                    ? setMouseOver(starValue)
                    : setMouseOver(null)}
                onMouseLeave={() => setMouseOver(null)}
              />
            </label>
          );
        })}
        <p className="text-center">
          {starRating} out of 5
        </p>
      </div>
    </div>
  );
};

export default DynamicStarRating;
