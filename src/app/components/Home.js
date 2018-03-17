
import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios';

// throw away code
import store from "../store";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get('http://localhost:7070/api/states', {})
          .then(response => {
        console.log('States: ', response);
    })
          .catch(error => {
        console.log(error);
    })

}
render() {
    return (
        <div>
            <h1> Xebia Training assignment </h1>
            <p> This is the assignment for React training held in Xebia. </p>
        </div>
    )
}
} 


Home.defaultProps = {

}

Home.propTypes = {

}