import { OPEN, REMOVE_TOKEN, SET_TOKEN, SUCCESS } from "./actionTypes";

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

export const setToken = (payload) => {
  return {
    type: SET_TOKEN,
    payload,
  }
}

export const removeToken = () => {
  return {
    type: REMOVE_TOKEN,
  }
}
