import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import withGreeting from "../hoc/withGreeting";

/** Header component used throughout the app. Renders a navigation bar at the top of the screen. */
const Header = (props) => (
  <header className="navbar navbar-expand-lg navbar-dark bg-martian-darkgray">
    <Link to="/app" className="navbar-brand"> Posts </Link>


    <div className="navbar-nav flex-row ml-md-auto d-md-flex">
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

Header.propTypes = {
  loggedIn: PropTypes.bool,
  logOut: PropTypes.func,
  message: PropTypes.string
};

export default withGreeting(Header);