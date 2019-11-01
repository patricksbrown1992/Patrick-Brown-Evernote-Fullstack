import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import {getNotebooks} from './util/notebooksUtil';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                user: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)

    //for Testing:
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    

});