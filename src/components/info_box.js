import React from 'react';

import withGreeting from "../hoc/withGreeting";


const InfoBox = ({ infoMessage }) => (
  <div className="alert alert-info">
    <strong>Info!</strong> {infoMessage}
  </div>
);

export default withGreeting(InfoBox);