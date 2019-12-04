import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import App from './components/App';
import reducers from './reducers';

//Setting Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware())
);

//const store = createStore(reducers);

ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);