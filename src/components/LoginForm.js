import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../redux/userSlice";
import { Link } from "react-router-dom";

function LoginForm({ onSubmit }) {
  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    // e.preventDefault();
    console.log(username);
    console.log(password);

    dispatch(
      login({
        username: username,
        password: password,
        isLogged: true,
      })
    );

    onSubmit();
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

        <button type="submit" className="login-btn" onClick={handleLogin}>
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
