export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const REMOVE_ALL_USERS = "REMOVE_ALL_USERS";
export const GET_TIME = "getCurrentTime";

export const addUser = (name) => {
  return {
    type: ADD_USER,
    payload: name
  };
};

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id
  };
};

export const removeAllUsers = () => {
  return {
    type: REMOVE_ALL_USERS
  };
};