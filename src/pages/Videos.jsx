import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { search } from "../api/yotube";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => search(keyword));
  return (
    <>
      <div>Videos {keyword ? `👀${keyword}` : "🔥HOT TREND"}</div>;
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong ❓</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
