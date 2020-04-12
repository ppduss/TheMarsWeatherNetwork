import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// FONTS //
import './fonts/Chicago-Regular.woff';
// @import '../src/fonts/COMP9801-qMy5.ttf';
// @import '../src/fonts/COMPNineteenNinetySeven.ttf';
// @import '../src/fonts/COMPPerfectDOSVGA.ttf';
// @import '../src/fonts/COMPSegment14.otf';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
