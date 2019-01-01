import * as APIUtil from '../util/tagUtil';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';

const receiveTags = tags => {
    debugger
    return({
        type: RECEIVE_TAGS,
        tags
    });
};

const receiveTag = tag => {
    debugger
    return ({
        type: RECEIVE_TAG,
        tag
    });
};

export const getTags = (user) => dispatch => (
    APIUtil.getTags(user).then(tags => (dispatch(receiveTags(tags))))
);

export const createTag = tag => dispatch => {
    return APIUtil.createTag(tag).then(tag => dispatch(receiveTag(tag)));
};
