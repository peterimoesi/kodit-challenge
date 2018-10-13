import {
    ADD_APPARTMENTS,
    ADD_USER_DATA,
    SORT_APARTMENTS,
    UPDATE_SIMILAR_APARTMENTS,
    REVERSE_ORDER
} from './types';
import * as sortFunc from './utils';

const initialState = {
    apartments : [],
    userData : {},
    sortParams : '',
    sortAscending : false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case ADD_APPARTMENTS:
        return {
            ...state,
            apartments : [...sortFunc.sortByAge(action.data)].reverse()
        };
    case ADD_USER_DATA:
        return {
            ...state,
            userData : action.data
        };
    case UPDATE_SIMILAR_APARTMENTS: {
        return {
            ...state,
            apartments : [
                ...state.apartments.filter(x => ((x.size_sqm > (parseInt(action.size) - 10)) && (x.size_sqm < (parseInt(action.size) + 10)) ))
            ]
        };
    }
    case SORT_APARTMENTS: {
        return {
            ...state,
            sortParams : action.sortParams,
            apartments : (() => {
                if (action.sortParams === 'size_sqm') {
                    return [...sortFunc.sortBySize(state.apartments)];
                }
                else if (action.sortParams === 'price_sqm') {
                    return [...sortFunc.sortByPrice(state.apartments)];
                } else if (action.sortParams === 'built_year') {
                    return [...sortFunc.sortByAge(state.apartments)];
                } else {
                    return [...state.apartments];
                }
            })()
        };
    }
    case REVERSE_ORDER : {
        return {
            ...state,
            sortAscending : !state.sortAscending,
            apartments : [...sortFunc.order(state.apartments)]
        };
    }
    default:
        return state;
    }
};
