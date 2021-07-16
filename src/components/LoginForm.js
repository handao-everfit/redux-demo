import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../redux/userSlice";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginForm({ onSubmit }) {
  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let storedData = [];

  // fetch("http://localhost:3000/users")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     storedData = data[0];
  //   });

  axios
    .get("http://localhost:3000/users")
    .then((res) => (storedData = res.data))
    .catch((err) => console.error(err));

  function handleLogin(e) {
    // e.preventDefault();
    let auth = false;
    storedData.forEach((user) => {
      if (user.username === username && password === user.password) {
        dispatch(
          login({
            username: username,
            password: password,
            isLogged: true,
          })
        );
        onSubmit();
        auth = true;
        return;
      }
    });

    if (!auth) {
      alert("Wrong password or username!");
    }
  }

  return (
    <form className="form">
      <div className="form-header">Login</div>

      <div className="box">
        <input
          type="text"
          name="username"
          className="form-field"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="text"
          name="password"
          className="form-field"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
      <h4>
        {"Don't have an account? "}
        <Link to="/register">Register</Link>
      </h4>
    </form>
  );
}

export default LoginForm;
