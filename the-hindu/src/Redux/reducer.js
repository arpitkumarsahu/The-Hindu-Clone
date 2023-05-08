import { OPEN, REMOVE_TOKEN, SET_TOKEN, SUCCESS } from "./actionTypes";

const init = {
  data: [],
  news: {},
  token: "",
};
const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case SUCCESS:
      return { ...state, data: payload };

    case OPEN:
      return {
        ...state,
        news: payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };

    case REMOVE_TOKEN:
      return {
        ...state,
        token: "",
      };

    default:
      return state;
  }
};

export { Reducer };
