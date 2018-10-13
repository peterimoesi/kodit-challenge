import { SORT_APARTMENTS, REVERSE_ORDER } from '../types';

export function sort(sortParams) {
    return {
        type : SORT_APARTMENTS,
        sortParams
    };
}

export function reverse() {
    return {
        type : REVERSE_ORDER
    };
}