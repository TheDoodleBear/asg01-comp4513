
import React, { useState, useRef } from "react";
import MovieFavouriteThumb from "./MovieFavouriteThumb";
import LeftArrow from "./img/left_arrow.png";
import RightArrow from "./img/right_arrow.png";

const MovieFavourites = function (props){
    const fevDiv = useRef(null);
        let arrowPOS = LeftArrow;
        const [sideView, setSideView] = useState(true);
        const handleSideBar = () => {
            setSideView(!sideView);
          };

        if(sideView){
            arrowPOS = LeftArrow;
        }else {
            arrowPOS = RightArrow;
        }


        return (
            <div className="bg-[#279AF1] rounded-tl-lg min-h-full relative flex min-w[20px] max-w-[300px]">
                <div className="flex h-full bg-slate-300 w-[20px] justify-items-center rounded-tl-lg" onClick={handleSideBar}>
                    <button className="bg-transparent"><img src={arrowPOS} alt="Arrow Button"/></button>
                </div>
                {sideView &&
               <div className="m-2" ref={fevDiv}>
               <h1 className="w-full font-mono text-center ">Favourites</h1>
                {props.favourites?.map(fav => <MovieFavouriteThumb 
                key={fav.id} 
                favourites={fav} 
                showSelectedMovie={props.selectedMovie} 
                removeFavourites={props.removeFavourites}  />
                )}
               </div>
}
            </div>
        )
    
}

export default MovieFavourites;