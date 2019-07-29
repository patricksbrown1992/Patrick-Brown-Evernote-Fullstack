import { merge } from 'lodash';
import { RECEIVE_TRIAGE, REMOVE_TRIAGE} from '../../actions/tagTriageAction';

const tagTriageReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_TRIAGE:
            debugger 
           return merge({}, state, { [action.entity.id]: action.entity });
        case REMOVE_TRIAGE:
            return {}
        default:
            return state

    }
}

export default tagTriageReducer;