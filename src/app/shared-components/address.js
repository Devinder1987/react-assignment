import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getStates, createState, editState } from '../state/index';

class Address extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            stateList: this.props.stateList
        };
        this.createState = this.createState.bind(this);
        this.editState = this.editState.bind(this);
    }
    componentWillMount() {
        this.props.getStates();
    }
    componentWillReceiveProps({stateList}) {
        if (stateList !== this.props.stateList) {
            this.setState({
                stateList: stateList
            })
        }
    }
    onHandleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    createState(){
        const data = {
            code: this.state.stateCode,
            name: this.state.stateName
        }
        this.props.createState(data);
    }
    editState() {
        const data = {
            code: this.state.updatedStateCode,
            name: this.state.updateStateName
        }
        const selectedState = this.state.stateList.find(val => {
            return val.code === this.state.updatedStateCode;
        })
        this.props.editState(data, selectedState.id);
    }
    render() {
        return (
            <div>
                <form className='form-box'>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">Street</span>
                        <input type="text" name='street' className="form-control" placeholder="Street" aria-describedby="basic-addon1" onChange={(e) => this.onHandleChange(e)} />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">City:</span>
                        <input type="text" name='city' className="form-control" placeholder="City" aria-describedby="basic-addon1" onChange={(e) => this.onHandleChange(e)} />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">State:</span>
                        <select className="form-control" onChange={(e) => this.onHandleChange(e)}>
                            <option>Select State</option>
                            {this.state.stateList.map(val => {
                                return <option>{val.name}</option>;
                            })}
                        </select>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">Pin code:</span>
                        <input type="number" name='pincode' className="form-control" placeholder="Pin code" aria-describedby="basic-addon1" onChange={(e) => this.onHandleChange(e)} />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">Phone Number:</span>
                        <input type="number" name='phonenumber' className="form-control" placeholder="Phone Number" aria-describedby="basic-addon1" onChange={(e) => this.onHandleChange(e)} />
                    </div>
                </form>
                <div>
                    <h2>Create new state </h2>
                    <form className='form-box' onSubmit={this.createState}>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">State code:</span>
                            <input type="text" name='stateCode' className="form-control" placeholder="Enter State code" onChange={(e) => this.onHandleChange(e)} required/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">State name</span>
                            <input type="text" name='stateName' className="form-control" placeholder="Enter State name" onChange={(e) => this.onHandleChange(e)} required/>
                        </div>
                        <button type="submit" className="btn btn-default">Add State</button>
                    </form>
                </div>
                <div>
                    <h2>Update state </h2>
                    <form className='form-box' onSubmit={this.editState}>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">State code:</span>
                            <input type="text" name='updatedStateCode' className="form-control" placeholder="Enter State code" onChange={(e) => this.onHandleChange(e)} required/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">State name</span>
                            <input type="text" name='updateStateName' className="form-control" placeholder="Enter State name" onChange={(e) => this.onHandleChange(e)} required/>
                        </div>
                        <button type="submit" className="btn btn-default">Edit State</button>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        stateList: state.stateList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getStates: () => {
            dispatch(getStates());
        },
        createState: (data) => {
            dispatch(createState(data));
        },
        editState: () => {
            dispatch(editState());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Address)