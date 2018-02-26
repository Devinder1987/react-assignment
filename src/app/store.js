import {createStore, combineReducers} from 'redux';

import counterReducer from "./state/counterReducer";

 
const rootReducers = combineReducers({
    //state name: reducer function
    counter: counterReducer,
    //cartItems: cartReducer
});

//let store = createStore(counterReducer);
//store.getState ==> 0, number type

let store = createStore(rootReducers);
//store.getState() ==> { counter : 0, cartItems: []}
//stoer.getState() object type

export default store;