import * as APIUtil from '../util/tagUtil';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';

const receiveTags = tags => {
    debugger
    return({
        type: RECEIVE_TAGS,
        tags
    })
}

export const getTags = (user) => dispatch => (
    APIUtil.getTags(user).then(tags => (dispatch(receiveTags(tags))))
);
