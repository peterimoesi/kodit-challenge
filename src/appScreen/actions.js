import axios from 'axios';
import apartments from './apartments.json';
import {
    ADD_APPARTMENTS
} from './types';

function removeNullValues(arr) {
    function checkObj(obj) { // check if the object has null values
        for (let x in obj) {
            if (!obj[x]) {
                return false;
            }
        }
        return true;
    }
    return arr.filter(x => checkObj(x)); // remove objects with null values
}

export function getApartments () {
    return dispatch => axios.post('https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data', { 'who_rules' : 'kodit.io' })
        .then(res => {
            console.log(res.data);
            dispatch({
                type : ADD_APPARTMENTS,
                data : removeNullValues(res.data)
            });
        })
        .catch(e => {
            console.error(e);
            // incase of COR erros
            dispatch({
                type : ADD_APPARTMENTS,
                data : removeNullValues(apartments)
            });
        });
}