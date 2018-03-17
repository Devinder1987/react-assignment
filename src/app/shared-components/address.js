import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Address extends Component {
    constructor() {
        super();
        this.state = {};
    }
    onHandleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    render() {
        return (
            // street, city, state, pincode, phone number information.
            <div>
                <form className='form-box'>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">Street</span>
                        <input type="text" name='street' className="form-control" placeholder="Street" aria-describedby="basic-addon1" onChange= { (e)=> this.onHandleChange(e) }/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">City:</span>
                        <input type="text" name='city' className="form-control" placeholder="City" aria-describedby="basic-addon1" onChange= { (e)=> this.onHandleChange(e) }/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">Pin code:</span>
                        <input type="text" name='pincode' className="form-control" placeholder="Pin code" aria-describedby="basic-addon1" onChange= { (e)=> this.onHandleChange(e) }/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">Phone Number:</span>
                        <input type="text" name='phonenumber' className="form-control" placeholder="Phone Number" aria-describedby="basic-addon1" onChange= { (e)=> this.onHandleChange(e) }/>
                    </div>
                </form>
            </div>
        )
    }
}