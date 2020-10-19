export const getTaggings = (user) => {
  return $.ajax({
    method: "GET",
    url: "api/taggings",
    data: {
      user_id: user.id,
    },
  });
};

export const getTagging = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/taggings/${id}`,
  });
};

export const createTagging = (tagging) => {
  return $.ajax({
    method: "POST",
    url: "api/taggings",
    data: {
      tagging,
    },
  });
};

export const deleteTagging = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/taggings/${id}`,
  });
};
