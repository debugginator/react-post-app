import React from 'react';
import PropTypes from 'prop-types';
import withGreeting from "./hoc/withGreeting";

/** Simple component which renders a spinning circle in the center of the viewport. */
const Loader = () => <div id="loader"/>;

Loader.propTypes = {
  message: PropTypes.string
};

export default withGreeting(Loader);