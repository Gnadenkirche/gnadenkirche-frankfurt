import React, { useEffect, useState } from "react";
import "./Messages.css";

export default function MessagesEN() {
  const channelId = "UCfj0U-zmaHsfID7Uw9BzP4A";
  const [videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_YT_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const params = new URLSearchParams({
          key: API_KEY,
          part: "snippet",
          channelId,
          maxResults: "13",
          order: "date",     // newest first
          type: "video",     // videos only
        });

        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?${params}`
        );
        const data = await res.json();

        if (!data.items) return;

        const parsed = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          published: item.snippet.publishedAt,
          thumbnail:
            item.snippet.thumbnails?.high?.url ||
            item.snippet.thumbnails?.medium?.url,
        }));

        setVideos(parsed);
      } catch (err) {
        console.error("YouTube fetch error:", err);
      }
    };

    if (API_KEY) fetchVideos();
  }, [API_KEY, channelId]);

  return (
    <div className="messages-page messages-page-en">
      <div className="messages-hero">
        <h1>Latest Sermons</h1>
      </div>

      <div className="video-grid">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="thumb"
                loading="lazy"
              />
            </a>

            <h3 className="video-title">{video.title}</h3>

            <p className="video-date">
              {new Date(video.published).toLocaleDateString("en-US")}
            </p>
          </div>
        ))}

      </div>

      <div className="subscribe-button">
        <a
          href={`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn"
        >
          Subscribe on YouTube
          <div className="shine"></div>
        </a>
      </div>
    </div>
  );
}
