import {merge} from 'lodash';
import {RECEIVE_SEARCH, CLEAR_SEARCH} from '../../actions/searchActions';

const SearchReducer = (state ='', action) => {
    // debugger
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SEARCH:
            return action.search;
        case CLEAR_SEARCH:
            return '';
        default: 
            return state;
    }
}

export default SearchReducer;