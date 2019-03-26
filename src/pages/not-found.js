import React from 'react';
import { Link } from 'react-router-dom';
import withGreeting from "../hoc/withGreeting";

// Constants
const ERROR_CODE = 404;
const ERROR_MESSAGE = "OOPS! PAGE NOT FOUND";
const ERROR_DESCRIPTION = "Sorry but the page you are looking for does not exist.";
const HOME_LINK_TEXT = "Go back to homepage";

const NotFound = () => (
  <div className="notfound">
    <h1>{ERROR_CODE}</h1>
    <h2>{ERROR_MESSAGE}</h2>
    <p>{ERROR_DESCRIPTION}</p>
    <Link to="/app"> {HOME_LINK_TEXT} </Link>
  </div>
);


export default withGreeting(NotFound);