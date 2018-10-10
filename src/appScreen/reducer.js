const initialState = {
    apartments : [],
    sortedApartments : [],
    sortParams : ''
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_APPARTMENTS':
        return {
            ...state,
            apartments : action.data
        };
        
    default:
        return state;
    }
};
