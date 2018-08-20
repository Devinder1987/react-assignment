import axios from 'axios';
import { getStateSuccess } from './actions';

const url = 'http://localhost:7070/';
const header = {
    "Content-Types": "application/json"
};

export const getStates = () => {
    return function fn(dispatch) {
        return axios.get(`${url}api/states`, {})
            .then(response => {
                dispatch(getStateSuccess(response.data));
            })
            .catch(error => {
                dispatch(getStateFailed(response.data));
            });
    };
}
export const createState = (data) => {
    return function fn(dispatch) {
        return axios.post(`${url}api/states`, data, header)
            .then(ressponse => {
                alert('State Added Success!!!');
                dispatch(createStateSuccess(response.data));
            })
            .catch(error => {
                dispatch(createStateFailed(response.data));
            })
    };
}
export const editState = (data, id) => {
    return function fn(dispatch) {
        return axios.put(`${url}api/states/${id}`, data, header)
            .then(ressponse => {
                alert('State Updated Success!!!');
                dispatch(editStateSuccess(response.data));
            })
            .catch(error => {
                dispatch(editStateFailed(response.data));
            })
    };
}