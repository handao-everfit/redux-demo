import React from "react";
import RegisterForm from "../components/RegisterForm";
import { useHistory } from "react-router-dom";

function RegisterPage(props) {
  let history = useHistory();

  return (
    <div className="register-page">
      <RegisterForm
        onSubmit={() => {
          history.push("/home");
        }}
      />
    </div>
  );
}

export default RegisterPage;
