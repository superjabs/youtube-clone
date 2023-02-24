import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import { fetchApi } from "../utils/fetchApi";
import Videos from "./Videos";

const Feed = () => {
  const [selectCategory, setSelectCategory] = useState("Coding");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet,id&q=${selectCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectCategory]);

  return (
    <div className="px-4 py-2 flex flex-col sm:flex-row">
      <div className="bg-white pt-2 sm:pt-0 flex sm:flex-col sm:basis-3/12 overflow-auto sm:h-screen sticky top-[60px] sm:top-[70px]">
        <SideBar
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          setVideos={setVideos}
        />
      </div>
      <div className="mt-2 sm:basis-9/12 sm:sticky top-0">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
