import { ADD_USER_DATA, UPDATE_SIMILAR_APARTMENTS } from '../types';

export function submitUserData(data) {
    return (dispatch) => {
        if (data.size_sqm) {
            dispatch({
                type : UPDATE_SIMILAR_APARTMENTS,
                size : data.size_sqm
            });
        }
        dispatch({
            type: ADD_USER_DATA,
            data
        });
    };
}