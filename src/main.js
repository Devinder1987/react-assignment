// bootstrap

import {render} from 'react-dom';
import React from 'react';

import {App} from './app/App';

// compare virtual and real dom (diff)
// on diff, patch the real dom
// merge => one direction => virtual dom to real dom
render( <App color='white' />,   //virtual dom
        document.getElementById("root") //real dom
)