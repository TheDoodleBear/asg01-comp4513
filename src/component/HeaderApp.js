import React from "react";
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import AboutDialog from "./AboutDialog";

const HeaderApp = function(props) {
  return (
    <header className="h-[80px] w-full col-span-3 bg-[#279AF1] rounded-b-lg mb-2">
      <nav className="flex flex-wrap items-center justify-between ">
        <Link to="/">
          <img src={logo} className="w-20 h-20 ml-3" alt="Missing Logo" />
        </Link>
        <AboutDialog />
      </nav>
    </header>
  );
};

export default HeaderApp;
