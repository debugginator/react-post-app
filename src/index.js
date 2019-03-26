import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/** This is a greeting message that every component logs to the console along with it's name during render. */
const HELLO_MESSAGE = "Hello from";

ReactDOM.render(<App message={HELLO_MESSAGE}/>, document.getElementById('root'));
