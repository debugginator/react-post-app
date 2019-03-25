import React from 'react';
import { Link } from "react-router-dom";

import AuthService from "../services/authentication.service";

const Header = () => (
  <header className="navbar navbar-expand-lg navbar-dark bg-martian-darkgray">
    <Link to="/app" className="navbar-brand"> Interview App </Link>

    <div className="collapse navbar-collapse">

      <div className="navbar-nav">
        <Link to="/app" className="nav-item nav-link active"> Posts </Link>
      </div>

      <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <Link to="/"
              className="nav-item nav-link"
              onClick={AuthService.logOut}>
          <strong>Log out</strong>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;