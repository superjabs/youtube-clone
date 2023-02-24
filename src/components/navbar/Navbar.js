import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../utils/utiliy";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="max-w-screen bg-white flex justify-between items-center py-2 px-4 sticky z-10 top-0 border-b">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="h-10" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
