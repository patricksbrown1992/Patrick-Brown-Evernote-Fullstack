export const getTaggings = () => {
    debugger
    return $.ajax({
        method: 'GET',
        url: 'api/taggings', 

    })
}

export const getTagging = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/taggings/${id}`,

    })
}

export const createTagging = (tagging) => {
    return $.ajax({
        method: 'POST',
        url: 'api/taggings',
        data: {
            tagging
        }
    })
}

export const deleteTagging = (id) => {

    return $.ajax({
        method: 'DELETE',
        url: `api/taggings/${id}`
    })
}
