import React from "react";
import RegisterForm from "../components/RegisterForm";
import { useHistory, Link } from "react-router-dom";

function RegisterPage(props) {
  let history = useHistory();

  return (
    <div>
      <RegisterForm
        onSubmit={() => {
          history.push("/home");
        }}
      />
    </div>
  );
}

export default RegisterPage;
