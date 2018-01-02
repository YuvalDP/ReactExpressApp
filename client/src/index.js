import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import friends from './reducers'
import registerServiceWorker from './registerServiceWorker';
/*import {logger} from 'redux-logger';*/
import InitialState from './reducers/InitialState';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReduxPromise from 'redux-promise';


// import Footer from './components/Footer';
const composeEnhancers = composeWithDevTools({});

let store = createStore(friends, InitialState, composeEnhancers(applyMiddleware(ReduxPromise)));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
           <App/>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
