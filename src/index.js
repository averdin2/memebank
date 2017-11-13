import React from 'react';
import ReactDOM from 'react-dom';
import Memebank from './Memebank';
import registerServiceWorker from './registerServiceWorker';

// Render the app
ReactDOM.render(<Memebank />, document.getElementById('root'));
registerServiceWorker();
