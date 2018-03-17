
import React, {Component} from "react";
import PropTypes from "prop-types";

import Contact from "./Contact";

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: 'Xebia IT solutions',
            teammates: ['Devinder', 'Mayank', 'Deepankar'],
            show: true,
            name: 'Enter name',
            highlight: false
        }
    }

 
    render() {
        const { company, teammates} = this.state;
        return (
            <div> 
            <h2>{company}</h2>
            <ul>
                  {
                      this.state
                      .teammates.map((name, index) => (
                          <li key={name} > {name} </li>
                      ))
                  }
            </ul>
            }
            </div>
        )
    }
} 


About.defaultProps = {
    
}

About.propTypes = {
    
}