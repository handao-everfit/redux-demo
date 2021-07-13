import React from "react";
import LoginForm from "../components/LoginForm";
import { useHistory, Link } from "react-router-dom";

function LoginPage(props) {
  let history = useHistory();

  return (
    <div>
      <LoginForm
        onSubmit={() => {
          history.push("/home");
        }}
      />
      <h3>
        Don't have an account?
        <Link to="/register">Register</Link>
      </h3>
    </div>
  );
}

export default LoginPage;
