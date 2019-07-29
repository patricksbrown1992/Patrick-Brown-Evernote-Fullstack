export const RECEIVE_TRIAGE = 'RECEIVE_TRIAGE';
export const REMOVE_TRIAGE = 'REMOVE_TRIAGE';

export const receiveTriage = entity => {

    return {
        type: RECEIVE_TRIAGE,
        entity
    }
}

export const removeTriage = () => {

    return {
        type: REMOVE_TRIAGE
    }
}