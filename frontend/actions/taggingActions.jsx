import * as APIUtil from '../util/taggingUtil';
export const RECEIVE_TAGGINGS = 'RECEIVE_TAGGINGS';
export const RECEIVE_TAGGING = 'RECEIVE_TAGGING';
export const DELETE_TAGGING = 'DELETE_TAGGING';
export const CLEAR_TAGGINGS = 'CLEAR_TAGGINGS';

const receiveTaggings = taggings => {

    return ({
        type: RECEIVE_TAGGINGS,
        taggings
    })
}

const receiveTagging = tagging => {

    return ({
        type: RECEIVE_TAGGING,
        tagging
    })
}

const destroyTagging = tagging => ({
    type: DELETE_TAGGING,
    tagging
});

export const clearTaggings = () => ({
    type: CLEAR_TAGGINGS
})


export const createTagging = (tagging) => dispatch => {

    return APIUtil.createTagging(tagging).then(tagging => dispatch(receiveTagging(tagging)));
};

export const deleteTagging = id => dispatch => {
    return APIUtil.deleteTagging(id).then((tagging) => dispatch(destroyTagging(tagging)))
};

export const getTaggings = (user) => dispatch => {
    return APIUtil.getTaggings(user).then(taggings => dispatch(receiveTaggings(taggings)))
}