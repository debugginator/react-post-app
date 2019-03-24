import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-martian">
      <Link className="navbar-brand">Interview App</Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active"> Posts </Link>
        </div>
        {/*<Link className="form-control">Log out</Link>*/}
      </div>
    </nav>
  </header>
);

export default ()=><div />; //todo