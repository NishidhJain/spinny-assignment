import React from "react";

function Anime({ image_url, title }) {
  return (
    <div className="anime-card">
      <img src={image_url} alt={title} className="anime-img" />
      <h4 className="anime-title">{title}</h4>
    </div>
  );
}

export default Anime;
