import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const HELLO_MESSAGE = "Hello from";

ReactDOM.render(<App message={HELLO_MESSAGE} />, document.getElementById('root'));
