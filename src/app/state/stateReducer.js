const defaultStateList = [];

export function  stateReducer(state =defaultStateList , action) {
    switch(action.type) {
       
        case "GET_STATE_SUCCESS":
            return action.data;
        case "GET_STATE_FAILED":
            return action.data;
        default:
            return state;
    }
}
export function  createStateReducer(state =defaultStateList , action) {
    switch(action.type) {
       
        case "CREATE_STATE_SUCCESS":
            return action.data;
        case "CREATE_STATE_FAILED":
            return action.data;
        default:
            return state;
    }
}
export function  editStateReducer(state =defaultStateList , action) {
    switch(action.type) {
       
        case "EDIT_STATE_SUCCESS":
            return action.data;
        case "EDIT_STATE_FAILED":
            return action.data;
        default:
            return state;
    }
}