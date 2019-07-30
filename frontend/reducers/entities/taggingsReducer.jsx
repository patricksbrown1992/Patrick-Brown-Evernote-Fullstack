import { merge } from 'lodash';
import { RECEIVE_TAGGINGS, CLEAR_TAGGINGS, RECEIVE_TAGGING, DELETE_TAGGING } from '../../actions/taggingActions';
const taggingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TAGGING:
            return merge( {}, state, {[action.tagging.id]: action.tagging})
        case DELETE_TAGGING:
            const newState = merge({}, state);
            delete newState[action.tagging.id];
            return newState;
        case CLEAR_TAGGINGS:
            return {};
        case RECEIVE_TAGGINGS:
            // debugger
            const taggings = {};
            action.taggings.forEach((tagging) => {
                taggings[tagging.id] = tagging;
            });

            return merge({}, state, taggings);  
        default:
            return state;
    }


}

export default taggingsReducer;