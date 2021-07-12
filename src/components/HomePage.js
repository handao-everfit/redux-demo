import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/slices/isLoggedSlice";

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
    </div>
  );
}

export default HomePage;
