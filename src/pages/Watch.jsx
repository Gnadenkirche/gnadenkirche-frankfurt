import React, { useState } from "react";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@YourChannelName";

// Replace IDs with your real ones
const YOUTUBE_VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    title: "Example Sermon 1",
    passage: "Romans 8:1–11",
    duration: "42:10",
  },
  {
    id: "9bZkp7q19f0",
    title: "Example Sermon 2",
    passage: "John 3:16–21",
    duration: "38:03",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Example Sermon 3",
    passage: "Psalm 23",
    duration: "35:22",
  },
];

function Watch() {
  const [activeVideoId, setActiveVideoId] = useState(YOUTUBE_VIDEOS[0].id);
  const activeVideo = YOUTUBE_VIDEOS.find((v) => v.id === activeVideoId);

  return (
    <div className="page page-watch">
      <section className="page-inner">
        <h2>Watch</h2>
        <p className="section-intro">
          Our sermons and Bible teaching are available on YouTube. Watch selected messages here or
          visit the channel for more.
        </p>

        <div className="watch-layout">
          {/* Main player */}
          <div className="video-main">
            <div className="video-main-iframe-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}`}
                title="Sermon video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-main-info">
              <div className="video-main-title">{activeVideo?.title}</div>
              <div className="video-main-meta">
                {activeVideo?.passage} • {activeVideo?.duration}
              </div>
              <button
                className="btn btn-outline"
                style={{ marginTop: "0.7rem" }}
                onClick={() =>
                  window.open(`https://www.youtube.com/watch?v=${activeVideoId}`, "_blank")
                }
              >
                Open on YouTube
              </button>
            </div>
          </div>

          {/* List */}
          <div className="video-list">
            {YOUTUBE_VIDEOS.map((video) => (
              <div
                key={video.id}
                className={
                  "video-item" + (video.id === activeVideoId ? " video-item-active" : "")
                }
                onClick={() => setActiveVideoId(video.id)}
              >
                <div className="video-thumb">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "0.6rem",
                    }}
                  />
                </div>
                <div>
                  <div className="video-item-title">{video.title}</div>
                  <div className="video-item-meta">
                    {video.passage} • {video.duration}
                  </div>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="video-item-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Open on YouTube
                  </a>
                </div>
              </div>
            ))}

            <button
              className="btn btn-primary"
              style={{ marginTop: "0.8rem" }}
              onClick={() => window.open(YOUTUBE_CHANNEL_URL, "_blank")}
            >
              View Full Channel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Watch;

