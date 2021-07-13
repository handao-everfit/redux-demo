import "./App.css";

import HomePage from "./pages/HomePage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import { useSelector, connect } from "react-redux";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const user = useSelector((state) => state.user.user);
  let isLogged = false;
  if (user) {
    isLogged = user.isLogged;
  }

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            isLogged ? <Redirect to="/home" /> : <Redirect to="/login" />
          }
        />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route
          exact
          path="/home"
          component={() => <HomePage isLogged={isLogged} />}
        />
      </Switch>
    </Router>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.isLoggedIn,
  };
}

export default connect(mapStateToProps)(App);
