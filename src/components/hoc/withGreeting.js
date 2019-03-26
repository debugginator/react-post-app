import React from 'react';

/**
 * Higher order component which logs a greeting from the wrapped component to the console.
 * @param WrappedComponent Component to wrap
 * @returns {function}
 */
export default function withGreeting(WrappedComponent) {
  function WithGreeting(props) {
    console.log(`${props.message} ${WrappedComponent.displayName || WrappedComponent.name}`);
    return <WrappedComponent {...props} />;
  }

  return WithGreeting;
}