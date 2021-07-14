import React from "react";

function AnimeCard({ title, url, imageUrl }) {
  return (
    <div className="anime-card">
      <div className="img-container">
        <img alt="preview" src={imageUrl} className="card-img"></img>
      </div>

      <div className="info-container">
        <h1 className="card-title">{title}</h1>
        <button className="read-btn">
          <a href={url}>Read</a>
        </button>
      </div>
    </div>
  );
}

export default AnimeCard;
