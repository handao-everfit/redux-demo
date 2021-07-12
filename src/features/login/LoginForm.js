import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./slices/isLoggedSlice";

// import { login, logout } from "./userSlice";

function LoginForm(props) {
  const isLogged = useSelector((state) => state.isLogged.value);
  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();
    dispatch(
      login({
        //pass in username, password, email, isLogged
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

        <button type="button" className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </form>

    // <h1>{isLogged ? "Welcome" : "Please Login!"}</h1>
  );
}

export default LoginForm;
