import * as ActionTypes from '../state/action-types';

const INITIAL_STATE = {
    products: [],
    status: false,
    error: undefined
}

export default function productReducer(state = INITIAL_STATE, action) {
    console.log("productReducer ", state, action);
    switch(action.type) {
        case ActionTypes.INIT_PRODUCTS:
            return Object.assign({}, state, {products: action.payload.products});

        case ActionTypes.LOADING:
            return Object.assign({}, state, {status: action.payload.status});

        case ActionTypes.ERROR:
            return Object.assign({}, state, {error: action.payload.error});

        default:
            return state;
    }
}