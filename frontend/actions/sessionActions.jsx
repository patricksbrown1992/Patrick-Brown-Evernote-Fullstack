import * as APIUtil from '../util/sessionAPIUtil';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

const removeUser = () => ({
    type: REMOVE_USER,
   
});
const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const signup = (user) => dispatch => (
    APIUtil.signup(user).then(user => (dispatch(receiveUser(user))
    ), err => (dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = (user) => dispatch => (
    APIUtil.login(user).then(user => {
       
        return dispatch(receiveUser(user))
        
    }
    ), (err => (dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(user => dispatch(removeUser())
    )
);


