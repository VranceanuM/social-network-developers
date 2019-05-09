import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// redux
import { Provider } from "react-redux";
import store from "./store";
// import components
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/login' component={Login} />
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/' component={Landing} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
