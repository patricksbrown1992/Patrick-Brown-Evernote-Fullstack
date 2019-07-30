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
    // debugger
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
    // debugger
    return APIUtil.createTagging(tagging).then(tagging => dispatch(receiveTagging(tagging)));
};

export const deleteTagging = tagging => dispatch => (
    APIUtil.deleteTagging(tagging).then((tagging) => dispatch(destroyTagging(tagging)))
);

export const getTaggings = () => dispatch => {
    return APIUtil.getTaggings().then(taggings => dispatch(receiveTaggings(taggings)))
}