import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

// Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item'


export default class App extends Component { //todo switch to func comp
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/"> Home </Link><br/>
            <NavLink
              activeStyle={{ color: 'red' }}
              to="/posts"> Posts </NavLink><br/>
            <Link to={{
              pathname: '/profile',
            }}> Profile </Link><br/>
            <hr/>
          </header>
          <Switch>
            <Route path="/posts/:id/:username" component={PostItem}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/posts" exact component={Posts}/>
            <Route path="/" exact component={Home}/>
            <Route render={()=><h3>Error 404.</h3>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}