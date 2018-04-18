import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/main';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('app'));