import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

// Components
import Navbar from "./components/layout/Navbar";
import Register from "./components/layout/Register";
import Login from "./components/layout/Login";
//import Posts from "./components/layout/Posts";
import PrivateRoute from "./components/routing/PrivateRoute";

// Redux
import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          {/*<Route exact path="/" component={Posts} />*/}
          <section>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/*<PrivateRoute exact path="/editor" component={PostEditor} />*/}
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
