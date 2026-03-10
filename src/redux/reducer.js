import {
  ADD_USER,
  REMOVE_USER,
  REMOVE_ALL_USERS,
  GET_TIME
} from "./actions";

const initialState = {
  message: "Działa!",
  time: new Date(),
  users: []
};

const reducer = (state = initialState, action) => {

  if (action.type === GET_TIME) {
    return {
      ...state,
      time: new Date()
    };
  }

  if (action.type === ADD_USER) {

    const newId =
      state.users.length > 0
        ? Math.max(...state.users.map(user => user.id)) + 1
        : 1;

    const newUser = {
      id: newId,
      name: action.payload
    };

    return {
      ...state,
      users: [...state.users, newUser]
    };
  }

  if (action.type === REMOVE_USER) {
    return {
      ...state,
      users: state.users.filter(user => user.id !== action.payload)
    };
  }

  if (action.type === REMOVE_ALL_USERS) {
    return {
      ...state,
      users: []
    };
  }

  return state;
};

export default reducer;