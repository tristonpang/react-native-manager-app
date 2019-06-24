import firebase from 'firebase';
import * as types from './types';

export const emailChanged = (text) => {
    return {
        type: types.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: types.PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: types.LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => dispatchLoginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => dispatchLoginUserSuccess(dispatch, user))
                    .catch(() => dispatchLoginUserFail(dispatch));
            });
    };
};
/* 
user => {
    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: user });
})
*/

const dispatchLoginUserSuccess = (dispatch, user) => {
    dispatch({
        type: types.LOGIN_USER_SUCCESS,
        payload: user
    });
};

const dispatchLoginUserFail = (dispatch) => {
    dispatch({ type: types.LOGIN_USER_FAIL });
}