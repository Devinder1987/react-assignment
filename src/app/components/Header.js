import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    constructor() {
        super(); //MUST
        console.log("Header created");
    }

    //ES.NEXT
    static propTypes = {
        title: PropTypes.string.isRequired
    }


    render() {
        console.log("Header render");

        
        return (
            <div>
                {/* Comments */}

                {/* props is a keyword, immutable */}

                <h2>{this.props.title}</h2>

                <NavLink to="/"  exact className="button" activeClassName="success" >
                     Home
                </NavLink>

                <NavLink to="/products" className="button" activeClassName="success" >
                     Product
                </NavLink>


                <NavLink to="/cart" className="button" activeClassName="success">
                     Cart
                </NavLink>


                <NavLink to="/about" className="button" activeClassName="success">
                     About
                </NavLink>


                <NavLink to="/contact" className="button" activeClassName="success">
                     Contact
                </NavLink>
                  
                  
            </div>
        )
    }
}
 
//ES6
//static field
// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }