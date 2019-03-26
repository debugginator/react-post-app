import React from 'react';
import PropTypes from 'prop-types';

import withGreeting from "./hoc/withGreeting";

/** Simple component which renders an info box containing the infoMessage.
 *  @param infoMessage Message to render on screen
 */
const InfoBox = ({ infoMessage }) => (
  <div className="alert alert-info">
    <strong>Info!</strong> {infoMessage}
  </div>
);

InfoBox.propTypes = {
  message: PropTypes.string,
  infoMessage: PropTypes.string
};

export default withGreeting(InfoBox);