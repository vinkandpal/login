import { put } from "redux-saga/effects";

import * as actions from "../actions/index";

export default function* setUsernameSaga(action) {
  yield put(
    actions.setUsername(action.username)
  );
}
