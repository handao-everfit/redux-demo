import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../redux/userSlice";
import { Link } from "react-router-dom";

function LoginForm({ onSubmit }) {
  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let storedData = {};

  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      storedData = data[0];
    });

  function handleLogin(e) {
    // e.preventDefault();

    console.log(storedData);

    if (username === storedData.username && password === storedData.password) {
      dispatch(
        login({
          username: username,
          password: password,
          isLogged: true,
        })
      );
      onSubmit();
    } else {
      alert("Wrong password or username!");
    }
  }

  return (
    <form className="form">
      <div className="form-header">Login</div>
      <box>
        <h5>Username: admin</h5>
        <h5>Password: admin</h5>
      </box>

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
