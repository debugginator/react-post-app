import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

// Components
import Home from './components/home';
import LogIn from './components/login';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item'
import Header from "./components/header";


export default class App extends Component { //todo switch to func comp
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/posts/:id" component={PostItem}/>
            <Route path="/app" exact component={Posts}/>
            <Route path="/" exact component={LogIn}/>
            <Route render={()=><h3>Error 404.</h3>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}