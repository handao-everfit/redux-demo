import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ButtonController from "./components/ButtonController";
import HomePage from "./components/HomePage";

import { useSelector, connect } from "react-redux";

function App() {
  const isLoginOpen = useSelector((state) => state.isLoginOpen.value);
  const isRegisterOpen = useSelector((state) => state.isRegisterOpen.value);

  const user = useSelector((state) => state.user.user);
  let isLogged = false;
  if (user) {
    isLogged = user.isLogged;
  }

  return (
    <div className="App">
      {!isLogged && <ButtonController />}
      {isLoginOpen && !isLogged && <LoginForm />}
      {isRegisterOpen && !isLogged && <RegisterForm />}
      {isLogged && <HomePage />}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.isLoggedIn,
  };
}

export default connect(mapStateToProps)(App);
