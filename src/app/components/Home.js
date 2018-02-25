
import React, {Component} from "react";
import PropTypes from "prop-types";

// throw away code
import store from "../store";

export default class Home extends Component {
    constructor(props) {
        super(props);
 
        console.log("Home cons", new Date().getMilliseconds());
 
       
    }

    increment() {
         let action = {
             type: 'INCREMENT',
             payload: {
                 value: 1
             }
         }

         store.dispatch(action);
    }

    componentWillMount() {
        console.log("Home will mount", new Date().getMilliseconds());
    }

    componentDidMount() {
        console.log("Home did mount", new Date().getMilliseconds());
        this.unsubcribeFunc = store.subscribe( () => {
            console.log("Home Subs called", Math.random());
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        console.log("home will unmount");
        this.unsubcribeFunc();
    }
    
 
    
    render() {
        console.log("Home render", new Date().getMilliseconds());
         
        let state = store.getState();
        let counter = state;

        return (
            <div> 
            <h2>Home</h2>

            <p> Counter: {counter} </p>
 
                
                 <button onClick={ () => this.increment()  }>
                +1
                </button>
                
            </div>
        )
    }
} 


Home.defaultProps = {
    
}

Home.propTypes = {
    
}