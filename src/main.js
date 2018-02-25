// bootstrap

import {render} from 'react-dom';
import React from 'react';

import {App} from './app/App';

import Routes from "./app/Routes";

// compare virtual and real dom (diff)
// on diff, patch the real dom
// merge => one direction => virtual dom to real dom
render( <Routes  />,   //virtual dom
        document.getElementById("root") //real dom
)