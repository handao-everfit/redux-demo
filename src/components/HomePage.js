import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/slices/userSlice";
import AnimeList from "./AnimeList";

function HomePage(props) {
  const dispatch = useDispatch();

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
