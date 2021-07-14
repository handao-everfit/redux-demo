import React from "react";
import LoginForm from "../components/LoginForm";
import { useHistory } from "react-router-dom";

function LoginPage(props) {
  let history = useHistory();

  return (
    <div className="login-page">
      <LoginForm
        onSubmit={() => {
          history.push("/home");
        }}
      />
    </div>
  );
}

export default LoginPage;
