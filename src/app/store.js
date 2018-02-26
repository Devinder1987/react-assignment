import {createStore, combineReducers, 
                    applyMiddleware} from 'redux';

import counterReducer from "./state/counterReducer";
import productReducer from './cart/state/productReducer';

// function called by store
//for every dispatch
function loggerMiddleware({dispatch, getState}) {
    return function(next) {
        return function(action) {
            console.log("LOGGER ", action, typeof action);
            //forward action to next middleware or reducers

            let result = next(action);

            return result;

            return true;
        }
    }
}
 
 
const rootReducers = combineReducers({
    //state name: reducer function
    counter: counterReducer,
    productState: productReducer
    //cartItems: cartReducer
});

//let store = createStore(counterReducer);
//store.getState ==> 0, number type

let store = createStore(rootReducers, 
                        applyMiddleware(loggerMiddleware));
//store.getState() ==> { counter : 0, cartItems: []}
//stoer.getState() object type

export default store;