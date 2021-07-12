import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { login, logout } from "./slices/isLoggedSlice";

import { login } from "../features/slices/isLoggedSlice";

function LoginForm(props) {
  // const isLogged = useSelector((state) => state.isLogged.value);

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
      })
    );
  }

  return (
    <form>
      <div className="header">Login</div>
      <div className="box">
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
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

    // <h1>{isLogged ? "Welcome" : "Please Login!"}</h1>
  );
}

export default LoginForm;
