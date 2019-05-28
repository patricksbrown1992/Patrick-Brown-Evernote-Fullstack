import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.login = APIUtil.login;
    window.signup = APIUtil.signup;
    window.logout = APIUtil.logout;
    ReactDOM.render(<Root />, root);
});