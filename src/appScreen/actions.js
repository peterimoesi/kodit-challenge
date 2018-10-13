import axios from 'axios';
import apartments from './apartments.json';
import {
    ADD_APPARTMENTS
} from './types';

export function getApartments () {
    return dispatch => axios.post('https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data', { 'who_rules' : 'kodit.io' })
        .then(res => {
            console.log(res.data);
            dispatch({
                type : ADD_APPARTMENTS,
                data : res.data
            });
        })
        .catch(e => {
            console.error(e);
            // incase of COR erros
            dispatch({
                type : ADD_APPARTMENTS,
                data : apartments
            });
        });
}