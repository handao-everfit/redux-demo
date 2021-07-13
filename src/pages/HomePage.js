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
    <div>
      <h1>Welcome! You're in!</h1>
      <button
        onClick={() => {
          dispatch(logout());
          console.log("logging out");
        }}
      >
        Log Out
      </button>
      <AnimeList />
    </div>
  );
}

export default HomePage;
