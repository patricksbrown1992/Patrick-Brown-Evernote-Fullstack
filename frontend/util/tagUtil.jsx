export const getTags = (user) => {

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

export const updateTag = tag => {
    return $.ajax({
        method: 'PATCH',
        url: `api/tags/${tag.id}`,
        data: {
            tag
        }
    })
}

export const deleteTag = tag => {
    return $.ajax({
        method: 'DELETE',
        url: `api/tags/${tag.id}`
    })
}