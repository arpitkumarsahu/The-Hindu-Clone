import { OPEN, SUCCESS } from "./actionTypes";

export const getData = (payload) => {
  return {
    type: SUCCESS,
    payload,
  };
};

export const openNews = (payload) => {
  return {
    type: OPEN,
    payload,
  };
};
