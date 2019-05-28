import * as APIUtil from '../util/sessionAPIUtil';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

const removeUser = () => ({
    type: REMOVE_USER,
   
});

export const signup = (user) => dispatch => (
    APIUtil.signup(user).then(user => dispatch(receiveUser(user)))
);

export const login = (user) => dispatch => (
    APIUtil.login(user).then(user => dispatch(receiveUser(user)))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(user => dispatch(removeUser()))
);


