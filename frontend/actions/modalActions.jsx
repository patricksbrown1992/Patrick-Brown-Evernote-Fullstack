export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {

    return {

        type: OPEN_MODAL,
        modal
    };
};

export const openEditModal = entity => {

    return {
        type: OPEN_MODAL,
        entity,
        modal: 'edit'
    };
};

export const openAddTagModal = entity => {
    return {
        type: OPEN_MODAL,
        entity,
        modal: 'addTag'
    }
}

export const editTagModal = entity => {
    return {
        type: OPEN_MODAL,
        entity,
        modal: 'editTag'
    }
}


export const openAddNoteModal = entity => {

    return {
        type: OPEN_MODAL,
        entity,
        modal: 'addNote'
    };
};

export const closeModal = () => ({
    type: CLOSE_MODAL
});