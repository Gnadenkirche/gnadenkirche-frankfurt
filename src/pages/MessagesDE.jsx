import React from "react";
import "./Messages.css";

export default function MessagesDE() {
  const uploadsPlaylistId = "UUfj0U-zmaHsfID7Uw9BzP4A";

  return (
    <div className="messages-page">
      <div className="messages-hero">
        <h1>Neueste Predigten</h1>
      </div>

      <div className="video-grid">
        <div className="youtube-playlist-wrapper">
          <iframe
            key={uploadsPlaylistId}   // 🔥 forces reload
            title="Neueste Predigten – Gnadenkirche Frankfurt"
            src={`https://www.youtube.com/embed/videoseries?list=${uploadsPlaylistId}&rel=0&modestbranding=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="subscribe-button">
        <a
          href="https://www.youtube.com/@GnadenkircheFrankfurt?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn"
        >
          Auf YouTube abonnieren
          <div className="shine"></div>
        </a>
      </div>
    </div>
  );
}

