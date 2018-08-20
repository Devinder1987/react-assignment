import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {stateReducer, createStateReducer, editStateReducer } from "./state/stateReducer";

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
    stateList: stateReducer,
    createdState: createStateReducer,
    updatedState: editStateReducer
});

//let store = createStore(stateReducer);
//store.getState ==> 0, number type

let store = createStore(rootReducers, 
                        applyMiddleware(thunk));
//store.getState() ==> { counter : 0, cartItems: []}
//stoer.getState() object type

export default store;