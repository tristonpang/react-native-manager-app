import {
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
            /* square brackets indicate that key name is to be accessed 
            from action.payload.prop and not a string of 'action.payload.prop' */
        case EMPLOYEE_CREATE:
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
};
