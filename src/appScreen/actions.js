import axios from 'axios';

import {
    ADD_APPARTMENTS
} from './types';

export function getApartments () {
    return dispatch => axios.post('https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data', { 'who_rules' : 'kodit.io' },
        {
            headers: {'Access-Control-Allow-Origin': '*'}
        }
    )
        .then(res => dispatch({
            type : ADD_APPARTMENTS,
            data : res.data
        }))
        .catch(e => console.error(e));
}