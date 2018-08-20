
// action creator function
// returns an action object
export function getStateSuccess(data) {
    return {
        type: 'GET_STATE_SUCCESS',
        data: data
    }
}
export function getStateFailed(data) {
    return {
        type: 'GET_STATE_FAILED',
        data: data
    }
}
export function createStateSuccess(data) {
    return {
        type: 'CREATE_STATE_SUCCESS',
        data: data
    }
}
export function createStateFailed(data) {
    return {
        type: 'CREATE_STATE_FAILED',
        data: data
    }
}
export function editStateSuccess(data) {
    return {
        type: 'EDIT_STATE_SUCCESS',
        data: data
    }
}
export function editStateFailed(data) {
    return {
        type: 'EDIT_STATE_FAILED',
        data: data
    }
}