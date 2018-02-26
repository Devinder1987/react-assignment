
// action creator function
// returns an action object
export function incrementActionCreator(value) {
    return {
        type: 'INCREMENT',
        payload: {
            value: value
        }
    }
}