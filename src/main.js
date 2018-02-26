// bootstrap

import {render} from 'react-dom';
import React from 'react';

import {App} from './app/App';

import Routes from "./app/Routes";

// provide store as context to all containers
import {Provider} from 'react-redux';

import store from "./app/store";

// compare virtual and real dom (diff)
// on diff, patch the real dom
// merge => one direction => virtual dom to real dom
render( (
        <Provider store={store}>
          <Routes />
        </Provider>
),   //virtual dom
        document.getElementById("root") //real dom
)