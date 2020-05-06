import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// FONTS //
import './fonts/Chicago-Regular.woff';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
