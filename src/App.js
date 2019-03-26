import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AuthService from "./services/authentication.service";
import withGreeting from "./hoc/withGreeting";

// Components
import LogIn from './pages/login';
import Posts from './pages/posts';
import Header from "./components/header";
import NotFound from "./pages/not-found";
import Post from "./pages/post";


/**
 * This functional component is the entry point of this web application.
 * It displays a header and creates page routes mapping them to their respective URIs.
 */
class App extends PureComponent {

  state = {
    loggedIn: AuthService.isAuthenticated(),
  };

  logIn = (email, password) => {
    let user = AuthService.logIn(email, password);
    if (user) {
      this.setState({ loggedIn: true });
    }

    return user;
  };

  logOut = () => {
    AuthService.logOut();
    this.setState({loggedIn:false});
  };

  render() {
    let message = this.props.message;
    let loggedIn = this.state.loggedIn;


    return (
      <BrowserRouter>
        <Header message={message} loggedIn={loggedIn} logOut={this.logOut}/>
        <Switch>
          <Route path="/posts/:id"
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

export default withGreeting(App);