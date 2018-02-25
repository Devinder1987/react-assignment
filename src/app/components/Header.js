import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
            </div>
        )
    }
}
 
//ES6
//static field
// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }