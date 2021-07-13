import React from "react";

function AnimeCard({ title, url, imageUrl }) {
  return (
    <div>
      <h1>{title}</h1>
      <button>
        {" "}
        <a href={url}>Read</a>
      </button>
      <img alt="preview" src={imageUrl}></img>
    </div>
  );
}

export default AnimeCard;
