import { OPEN, SUCCESS } from "./actionTypes";

const init = {
  data: [],
  news: {},
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

    default:
      return state;
  }
};

export { Reducer };
