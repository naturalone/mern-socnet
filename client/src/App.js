import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

// Components
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Feed from "./components/layout/Feed";
import Post from "./components/posts/Post";
import PrivateRoute from "./components/routing/PrivateRoute";

// Redux
import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section>
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route exact path="/post/:id" component={Post} />
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
