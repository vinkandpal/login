import * as actionTypes from "./actionTypes";

export const setUsername = (username) => {
  return {
    type: actionTypes.USER_NAME,
    username: username
  };
};
