import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import {getNotebooks} from './util/notebooksUtil';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.getNotebooks = getNotebooks;
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
});