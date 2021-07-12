import "./App.css";
import LoginForm from "./features/login/LoginForm";
import RegisterForm from "./features/RegisterForm";
import ButtonController from "./features/ButtonController";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const isLoginOpen = useSelector((state) => state.isLoginOpen.value);
  const isRegisterOpen = useSelector((state) => state.isRegisterOpen.value);

  return (
    <div className="App">
      <ButtonController />
      {isLoginOpen && <LoginForm />}
      {isRegisterOpen && <RegisterForm />}
    </div>
  );
}

export default App;
