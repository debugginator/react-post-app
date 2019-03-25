import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import AuthService from "./services/authentication.service";

// Components
import LogIn from './pages/login';
import Posts from './pages/posts';
import PostItem from './components/post_item'
import Header from "./components/header";
import NotFound from "./pages/not-found";


const App = () =>
  (
    <BrowserRouter>
      <div>
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
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );

export default App;