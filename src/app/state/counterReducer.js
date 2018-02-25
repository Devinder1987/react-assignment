const INITIAL_STATE = 0;

export default function  counterReducer(state =INITIAL_STATE , action) {
    console.log("counterReducer", state, action);

    switch(action.type) {
       
        case "INCREMENT":
            return state + action.payload.value;

        case 'DECREMENT':
            return state - action.payload.value;

        case 'RESET':
            return INITIAL_STATE;

        default:
            return state;
    }
}