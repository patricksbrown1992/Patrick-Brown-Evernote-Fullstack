import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import {login, logout, signup} from './actions/sessionActions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
});