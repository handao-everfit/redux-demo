import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

function RegisterForm({ onSubmit }) {
  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
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
    <form>
      <div className="header">Register</div>
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

        <button type="button" className="register-btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </form>

    // <h1>{isLogged ? "Welcome" : "Please Login!"}</h1>
  );
}

export default RegisterForm;
