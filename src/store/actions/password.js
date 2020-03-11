import * as actionTypes from "./actionTypes";

export const setPassword = (pwd) => {
  return {
    type: actionTypes.USER_PASSWORD,
    password: pwd
  };
};
