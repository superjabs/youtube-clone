import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;
  return (
    <Link to={`/video/${id.videoId}`}>
      <div className="border rounded-md overflow-hidden">
        <img
          className="w-full object-cover"
          src={snippet.thumbnails.high.url}
          alt="thumbnails"
        />
        <div className="p-2">
          <h1 className="font-semibold mt-1">{snippet.title}</h1>
          <p className="mt-2">{snippet.channelTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
