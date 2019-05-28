import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

const removeUser = () => ({
    type: REMOVE_USER
});

export const signup = (user) => dispatch => (
    APIUtil.signup(user).then(dispatch(receiveUser(user)))
);

export const login = (user) => dispatch => (
    APIUtil.login(user).then(dispatch(receiveUser(user)))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(dispatch(removeUser()))
);


