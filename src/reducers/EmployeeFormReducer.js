import {
    EMPLOYEE_UPDATE
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
        default:
            return state;
    }
};
