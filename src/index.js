import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.less';
import './assets/css/custom.css';

import { Routing } from './Routing';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import allReducers from './redux/reducers/allReducers';

//import * as serviceWorker from './serviceWorker';
//const store = configureStore();

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(allReducers);

ReactDOM.render(<Provider store={store}><Routing/></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
