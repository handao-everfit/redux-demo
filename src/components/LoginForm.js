import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../redux/userSlice";

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
    <form className="login-form">
      <div className="header">Login</div>
      <div className="box">
        <div className="input-field">
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="text"
            name="password"
            className="login-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
