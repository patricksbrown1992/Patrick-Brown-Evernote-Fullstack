
export const RECEIVE_SHORTCUTS = 'RECEIVE_SHORTCUTS';
export const RECEIVE_SHORTCUT = 'RECEIVE_SHORTCUT';
export const DESTROY_SHORTCUT = 'DESTROY_SHORTCUT';
export const CLEAR_SHORTCUTS = 'CLEAR_SHORTCUTS';

export const receiveShortcut = shortcut => {
    debugger
    return ({
        type: RECEIVE_SHORTCUT,
        shortcut
    });
};

const receiveShortcuts = shortcuts => {

    return ({
        type: RECEIVE_SHORTCUTS,
        shortcuts
    });
};

const destroyShortcut = (shortcut) => {

    return ({
        type: DESTROY_SHORTCUT,
        shortcut
    });
};

export const clearShortcuts = () => {
    return {
        type: CLEAR_SHORTCUTS
    }
}