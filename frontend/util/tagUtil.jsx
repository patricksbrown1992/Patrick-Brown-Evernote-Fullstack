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