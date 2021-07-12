import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./login/slices/isLoggedSlice";

function RegisterForm(props) {
  const isLogged = useSelector((state) => state.isLogged.value);
  const dispatch = useDispatch();

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
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="text"
            name="password"
            className="login-input"
            placeholder="Password"
          />
        </div>

        <button
          type="button"
          className="register-btn"
          onClick={() => dispatch(login())}
        >
          Register
        </button>
      </div>
    </form>

    // <h1>{isLogged ? "Welcome" : "Please Login!"}</h1>
  );
}

export default RegisterForm;
