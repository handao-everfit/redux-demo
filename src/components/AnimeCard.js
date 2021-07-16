import React from "react";

function AnimeCard({ title, url, imageUrl, authorName, intro }) {
  return (
    <div className="anime-card">
      <div className="img-container">
        <img alt="preview" src={imageUrl} className="card-img"></img>
      </div>

      <div className="info-container">
        <h1 className="card-title">{title}</h1>
        <h5>{authorName}</h5>
        <p>{intro}</p>
        <a href={url}>
          <button className="read-btn">Read</button>
        </a>
      </div>
    </div>
  );
}

export default AnimeCard;
