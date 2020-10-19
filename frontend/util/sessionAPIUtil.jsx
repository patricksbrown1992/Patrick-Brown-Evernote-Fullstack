export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: {
      user,
    },
  });
};

export const checkEmail = (email) => {
  return $.ajax({
    method: "GET",
    url: "api/users/verify",
    data: {
      email,
    },
  });
};

export const login = (user) =>
  $.ajax({
    method: "POST",
    url: "api/session",
    data: {
      user,
    },
  });

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: `api/session`,
  });
