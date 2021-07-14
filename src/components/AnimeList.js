import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

function AnimeList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v3/anime/1/news")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const articles = items.articles;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="anime-list">
        {articles &&
          articles.map((item) => (
            <li key={articles.indexOf(item)}>
              <AnimeCard
                title={item.title}
                url={item.url}
                imageUrl={item.image_url}
              />
            </li>
          ))}
      </ul>
    );
  }
}

export default AnimeList;
