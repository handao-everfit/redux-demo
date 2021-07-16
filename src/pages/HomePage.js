import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import AnimeList from "../components/AnimeList";
import { Redirect } from "react-router-dom";

function HomePage({ isLogged }) {
  const dispatch = useDispatch();

  if (!isLogged) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="home-body">
      <header>
        <h1>Anime News</h1>
        <button
          className="logout-btn"
          onClick={() => {
            dispatch(logout());
            console.log("logging out");
          }}
        >
          Log Out
        </button>
      </header>
      <h1 className="home-title">Lastest Update</h1>
      <AnimeList />
    </div>
  );
}

export default HomePage;
