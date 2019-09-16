import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { reducers } from './reducers';
import { Provider } from 'react-redux';
import { rootSaga } from './saga';
import 'bootstrap/dist/css/bootstrap.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(sagaMiddleware)
        // ,
        // window["__REDUX_DEVTOOLS_EXTENSION__"]
        //   ? window["__REDUX_DEVTOOLS_EXTENSION__"]()
        //   : f => f
    )
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
