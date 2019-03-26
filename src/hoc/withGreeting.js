import React from 'react';

export default function withGreeting(WrappedComponent) {
  function WithGreeting(props) {
    console.log(`${props.message} ${WrappedComponent.displayName || WrappedComponent.name}`);
    return <WrappedComponent {...props} />;
  }
  return WithGreeting;
}