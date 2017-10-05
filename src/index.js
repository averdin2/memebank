import React from 'react';
import ReactDOM from 'react-dom';
import Memebank from './Memebank';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Memebank />, document.getElementById('root'));
registerServiceWorker();
