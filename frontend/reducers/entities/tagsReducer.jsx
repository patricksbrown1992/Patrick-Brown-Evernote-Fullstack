import { RECEIVE_TAGS, RECEIVE_TAG} from '../../actions/tagActions';
import {merge} from 'lodash';
const tagsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TAGS:
            const tags = {};
            action.tags.forEach((tag) => {
                tags[tag.id] = tag;
            });
            return merge({}, state, tags);
        case RECEIVE_TAG:
            return merge({}, state, {[action.tag.id]: action.tag});
        default:
            return state;
    }
}

export default tagsReducer;