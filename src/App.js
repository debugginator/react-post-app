import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import AuthService from "./services/authentication.service";

// Components
import LogIn from './pages/login';
import Posts from './components/posts';
import PostItem from './components/post_item'
import Header from "./components/header";


const App = () =>
  (
    <BrowserRouter>
      <div>
        <Link onClick={AuthService.logOut}> Log out </Link> {/*TODO move this somewhere else*/}
        <Header/>
        <Switch>
          <Route path="/posts/:id" component={PostItem}/>
          <Route path="/app"
                 exact
                 render={routeProps => (
                   AuthService.getCurrentUser() ?
                     <Posts {...routeProps} /> : <Redirect to="/"/>
                 )}
          />
          <Route path="/" exact component={LogIn}/>
          <Route render={() => <h3>Error 404.</h3>}/>
        </Switch>
      </div>
    </BrowserRouter>
  );

export default App;