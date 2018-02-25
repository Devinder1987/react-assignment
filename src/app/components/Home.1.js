
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
    constructor(props) {
        super(props);

        // state is a keyword
        // mutable
        // state is owned by component
        this.state = {
            counter: 0,
            show: true
        }
 
    }

    increment() {
        // //BAD, mutating state directly
        // this.state.counter++;

        // console.log(this.state.counter);

        // //BAD, let react to call render method
     //    this.forceUpdate();

        //GOOD
        console.log("before SetState ", this.state.counter);
        //merge state, calls render 
        //setState is async
        this.setState({
            //Immutable
            counter: this.state.counter + 1
        });

        this.setState({
            show: !this.state.show
        })

        console.log("after SetState ", this.state.counter);

        //console.trace("called");

    }
    

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Home should update curent state", this.state);
        console.log("Home should update next state", nextState);
        

        if (nextState.counter %2 == 1) 
            return true;

        return false;
    }
    
    render() {
        console.log("Home render", this.state.counter);

        //let _this = this;

        return (
            <div> 
            <h2>Home</h2>

            <p> Counter: {this.state.counter}</p>

            {/* <button onClick={ function() { _this.increment() } }>
              +1
            </button> */}

                
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