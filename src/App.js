import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthService from "./services/authentication.service";
import withGreeting from "./hoc/withGreeting";

// Components
import LogIn from './pages/login';
import Posts from './pages/posts';
import Header from "./components/header";
import NotFound from "./pages/not-found";
import Post from "./pages/post";


/**
 * This component is the entry point of this web application.
 * It displays a header and creates page routes mapping them to their respective URIs.
 */
class App extends PureComponent {

  /** Initial state of the component */
  state = {
    /** Boolean flag used for toggling the display of the "Log out" button in the header. */
    loggedIn: AuthService.isAuthenticated(),
  };

  /**
   * Used for authenticating a user using email and password.
   * @param email User's email
   * @param password User's password
   * @returns user object or false
   */
  logIn = (email, password) => {
    let user = AuthService.logIn(email, password);
    if (user) {
      this.setState({ loggedIn: true });
    }

    return user;
  };

  /** Logs the current user out from his session. */
  logOut = () => {
    AuthService.logOut();
    this.setState({ loggedIn: false });
  };

  render() {
    let message = this.props.message;
    let loggedIn = this.state.loggedIn;


    return (
      <BrowserRouter>
        <Header message={message} loggedIn={loggedIn} logOut={this.logOut}/>
        <Switch>
          <Route path="/posts/:id"
                 exact
                 render={routeProps => <Post message={message} {...routeProps} />}
          />
          <Route path="/app"
                 exact
                 render={routeProps => (
                   loggedIn ?
                     <Posts {...routeProps} message={message}/> : <Redirect to="/"/>
                 )}
          />
          <Route path="/"
                 exact
                 render={
                   routeProps => <LogIn  {...routeProps}
                                         message={message}
                                         logIn={this.logIn}/>
                 }/>
          <Route render={routeProps => <NotFound {...routeProps} message={message}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  message: PropTypes.string
};

export default withGreeting(App);