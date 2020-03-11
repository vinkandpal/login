 import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import {
  authUserSaga,
  authPwdSaga
} from "./auth";
import setUsernameSaga from './username';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_PASSWORD, authPwdSaga)
  ]);
}

export function* watchUsernmae() {
  yield takeEvery(actionTypes.USER_NAME, setUsernameSaga);
}
