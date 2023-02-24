import React from "react";
import { categories } from "../utils/utiliy";

const SideBar = ({ selectCategory, setSelectCategory, setVideos }) => {
  return (
    <>
      {categories.map((category, i) => {
        return (
          <button
            className="rounded-lg p-2 mr-3 sm:my-2 flex items-center justify-start mb-3"
            key={i}
            onClick={() => {
              setSelectCategory(category.name);
              setVideos([]);
            }}
            style={{
              backgroundColor:
                selectCategory === category.name ? "#f0f0f0" : "white",
            }}
          >
            <span className="hidden sm:block mr-2">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </>
  );
};

export default SideBar;
