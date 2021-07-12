import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ButtonController from "./components/ButtonController";
import HomePage from "./components/HomePage";

import { useSelector, useDispatch, connect } from "react-redux";

function App() {
  const isLoginOpen = useSelector((state) => state.isLoginOpen.value);
  const isRegisterOpen = useSelector((state) => state.isRegisterOpen.value);
  const isLogged = useSelector((state) => state.isLogged.value);
  const user = useSelector((state) => state.user);

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
