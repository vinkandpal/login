import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    userId: userId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};
export const auth = (username) => {
  return {
    type: actionTypes.AUTH_USER,
    username: username
  };
};




export const authPwdStart = () => {
  return {
    type: actionTypes.AUTH_PWD_START
  };
};

export const authPwdSuccess = (success) => {
  return {
    type: actionTypes.AUTH_PWD_SUCCESS,
    success: success
  };
};

export const authPwdFail = error => {
  return {
    type: actionTypes.AUTH_PWD_FAIL,
    error: error
  };
};
export const authPwd = (user, pwd) => {
  return {
    type: actionTypes.AUTH_PASSWORD,
    user: user,
    pwd: pwd
  };
};
