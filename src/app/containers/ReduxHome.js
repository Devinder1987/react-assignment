import {connect} from 'react-redux';

import ReduxHome from '../components/ReduxHome';


// mapStateToProps is called by container
// when on susbcribe, containers shall subscribe from store
// container calls   store.getState()
//pass the state to this function
function mapStateToProps(state) {
    console.log("Redux home contaienr mapStateToProps", state);
    return {
        // returns props
        // propName: property value
        counter: state.counter, 
        //login: state.authState.login
    }
}

// called by container
// when, first creating component instance
// called only once per container instance
// container shall pass store.dispatch fn as arg
function mapDispatchToProps(dispatch) {
    console.log("home redux container dispatch to props");

    return {
        //propName: function() {}
        parentIncrement: function() {
            let action = {
                type: 'INCREMENT',
                payload: {
                    value: 1
                }
            };

            console.log("Dispatch from container", action);
            dispatch(action);
        }
    }

}

let connnectFn = connect(mapStateToProps, 
                         mapDispatchToProps);

// container is a pure component
let ReduxHomeContainerComponent = connnectFn(ReduxHome);

export default ReduxHomeContainerComponent;