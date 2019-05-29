import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as APIUtil from './util/sessionAPIUtil';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.login = APIUtil.login;
    window.signup = APIUtil.signup;
    window.logout = APIUtil.logout;
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
});