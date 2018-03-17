import axios from 'axios';

const url = 'http://localhost:7070/';
const header = {
    "Content-Types": "application/json"
};

export const getStates = () => {
    axios.get(`${url}api/states`, {})
        .then(response => {
            console.log('States: ', response);
        })
        .catch(error => {
            console.log(error);
        })
}
export const createState = () => {
    axios.post(`${url}api/states`, data, header)
    .then(ressponse => {
        console.log('Added');
    })
    .catch(error => {
        console.log('Add failed!!!');
    })
}
export const editState = () => {
    axios.put(`${url}api/states`, data, header)
    .then(ressponse => {
        console.log('Added');
    })
    .catch(error => {
        console.log('Add failed!!!');
    })
}