export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
    // debugger
    return {

        type: OPEN_MODAL,
        modal
    };
};

export const openEditModal = entity => {
    debugger
    return {
        type: OPEN_MODAL,
        entity,
        modal: 'edit'
    };
};

export const openEditNoteModal = (entity) => {
    debugger
    return {
        type: OPEN_MODAL,
        entity,
        modal: 'editNote'
    };
};
export const openAddNoteModal = entity => {
    debugger
    return {
        type: OPEN_MODAL,
        entity,
        modal: 'addNote'
    };
};

export const closeModal = () => ({
    type: CLOSE_MODAL
});