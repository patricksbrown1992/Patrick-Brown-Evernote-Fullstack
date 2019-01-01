export const getTags = (user) => {
    debugger
    return $.ajax({
        method: 'GET',
        url: '/api/tags',
        data: {
            user_id: user.id
        }
    });
};

export const createTag = tag => {

    return $.ajax({
        method: 'POST',
        url: 'api/tags',
        data: {
            tag
        }
    });
};