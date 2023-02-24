import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${inputSearch}`);
    setInputSearch("");
  };

  return (
    <form
      className="flex items-center border rounded-full overflow-hidden"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="Search"
        className="outline-none p-2 w-40 sm:w-56 text-md"
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
      />
      <button type="submit" className="h-10 border-l bg-slate-100">
        <MagnifyingGlassIcon className="text-slate-400 h-7 px-3" />
      </button>
    </form>
  );
};

export default SearchBar;
