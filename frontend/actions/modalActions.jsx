export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
    // debugger
    return {

        type: OPEN_MODAL,
        modal
    };
};

export const openEditModal = id => {
    debugger
    return {
        type: OPEN_MODAL,
        id,
        modal: 'edit'
    };
};
export const openAddNoteModal = id => {
    debugger
    return {
        type: OPEN_MODAL,
        id,
        modal: 'addNote'
    };
};

export const closeModal = () => ({
    type: CLOSE_MODAL
});