import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { Link } from "react-router-dom";
import axios from "axios";

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

    // axios({
    //   method: "post",
    //   url: "http://localhost:3000/users",
    //   data: {
    //     username: username,
    //     password: password,
    //   },
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));

    axios
      .post("http://localhost:3000/users", {
        username: username,
        password: password,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));

    onSubmit();
  }

  return (
    <form className="form">
      <div className="form-header">Register</div>
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

        <button type="button" className="register-btn" onClick={handleRegister}>
          Register
        </button>
      </div>

      <h4>
        {"Already have an account? "}
        <Link to="/login">Log In</Link>
      </h4>
    </form>
  );
}

export default RegisterForm;
