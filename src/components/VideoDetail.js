import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/fetchApi";
import VideoCard from "./VideoCard";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videoSuggest, setVideoSuggest] = useState(null);

  useEffect(() => {
    fetchApi(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => setVideoDetail(data.items[0])
    );
    fetchApi(`search?part=id,snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideoSuggest(data.items)
    );
  }, [id]);
  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:basis-8/12 p-2">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="h-full"
          width="100%"
        />
        <div className="p-2 my-2">
          <h1 className="font-semibold">{videoDetail?.snippet.title}</h1>
          <p>{videoDetail?.statistics.viewCount} views</p>
          <p className="mt-4">{videoDetail?.snippet.description}</p>
        </div>
      </div>
      <div className="md:basis-4/12 p-2">
        {videoSuggest?.map((video, i) => {
          return (
            <>
              <VideoCard key={i} video={video} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default VideoDetail;
