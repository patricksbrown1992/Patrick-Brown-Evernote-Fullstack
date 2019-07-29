export const RECEIVE_TRIAGE = 'RECEIVE_TRIAGE';
export const REMOVE_TRIAGE = 'REMOVE_TRIAGE';

export const receiveTriage = id => {

    return {
        type: RECEIVE_TRIAGE,
        id
    }
}

export const removeTriage = () => {

    return {
        type: REMOVE_TRIAGE
    }
}