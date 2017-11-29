import React from 'react';
import ReactDOM from 'react-dom';
import Memebank from './container.js';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware
} from 'redux';

// Reducers
import Root from './reducer.js';

// Middleware
import bankMiddleware from './scenes/Bank/services/middleware.js';
import accountMiddleware from './services/middleware.js';


const store = createStore(Root, applyMiddleware(accountMiddleware, bankMiddleware));

ReactDOM.render(<Provider store={store}><Memebank /></Provider>, document.getElementById('root'));
registerServiceWorker();
