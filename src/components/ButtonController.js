import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openLogin, closeLogin } from "../features/slices/isLoginOpen";
import {
  openRegister,
  closeRegister,
} from "../features//slices/isRegisterOpen";

function ButtonController(props) {
  const isLoginOpen = useSelector((state) => state.isLoginOpen.value);
  const isRegisterOpen = useSelector((state) => state.isRegisterOpen.value);

  const dispatch = useDispatch();

  function toggleLogin() {
    dispatch(openLogin());
    dispatch(closeRegister());
  }

  function toggleRegister() {
    dispatch(closeLogin());
    dispatch(openRegister());
  }

  return (
    <div className="box-controller">
      <button onClick={toggleLogin}>Login</button>
      <button onClick={toggleRegister}>Register</button>
    </div>
  );
}

export default ButtonController;
