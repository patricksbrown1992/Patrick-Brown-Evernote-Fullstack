export const getTaggings = () => {
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

export const createTagging = (noteId, tagID) => {
    return $.ajax({
        method: 'POST',
        url: 'api/taggings'
    })
}
