import React from 'react';
import { Link } from "react-router-dom";

import withGreeting from "../hoc/withGreeting";

const Header = (props) => (
  <header className="navbar navbar-expand-lg navbar-dark bg-martian-darkgray">
    <Link to="/app" className="navbar-brand"> Interview App </Link>

    <div className="collapse navbar-collapse">

      <div className="navbar-nav">
        <Link to="/app" className="nav-item nav-link active"> Posts </Link>
      </div>
    </div>

    <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
      <Link to="/"
            className="nav-item nav-link"
            style={
              props.loggedIn ?
              {} : { display: "none" }
            }
            onClick={props.logOut}>
        <strong>Log out</strong>
      </Link>
    </div>
  </header>
);


export default withGreeting(Header);