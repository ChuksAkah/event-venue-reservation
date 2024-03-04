import { createStore } from "redux";

const reducer = (
  state = {
    loading: false,
    userData: null,
  },
  action
) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: action.payload,
    };
  }
  if (action.type === "SET_USER_DATA") {
    return {
      ...state,
      userData: action.payload,
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;
