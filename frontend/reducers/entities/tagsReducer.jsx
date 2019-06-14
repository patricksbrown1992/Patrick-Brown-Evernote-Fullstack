import {RECEIVE_TAGS} from '../../actions/tagActions';
import {merge} from 'lodash';
const tagsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TAGS:
            const tags = {};
            action.tags.forEach((tag) => {
                tags[tag.id] = tag;
            });
            debugger
            return merge({}, state, tags);
        default:
            return state;
    }
}

export default tagsReducer;