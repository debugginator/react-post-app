import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import AuthService from "./services/authentication.service";

// Components
import LogIn from './pages/login';
import Posts from './pages/posts';
import PostItem from './components/post_item'
import Header from "./components/header";
import NotFound from "./pages/not-found";
import Post from "./pages/post";
import withGreeting from "./hoc/withGreeting";


const App = ({ message }) => (
  <BrowserRouter>
    <div>
      <Header message={message}/>
      <Switch>
        <Route path="/posts/:id"
               render={routeProps => <Post message={message} {...routeProps} />}
        />
        <Route path="/app"
               exact
               render={routeProps => (
                 AuthService.isAuthenticated() ?
                   <Posts {...routeProps} message={message}/> : <Redirect to="/"/>
               )}
        />
        <Route path="/"
               exact
               render={routeProps => <LogIn  {...routeProps} message={message}/>}/>
        <Route render={routeProps => <NotFound {...routeProps} message={message}/>}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default withGreeting(App);