import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
//store
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./store/Reducers";
import {Provider} from "react-redux";

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
