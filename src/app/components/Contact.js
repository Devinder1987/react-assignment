
import React, { Component } from "react";
import PropTypes from "prop-types";
import Address from '../shared-components/address';

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <Address />
      </div>
    )
  }
}


Contact.defaultProps = {

}

Contact.propTypes = {

}

Contact.contextTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  store: PropTypes.object
}