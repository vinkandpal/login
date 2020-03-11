import { delay } from "redux-saga/effects";
import { put, call } from "redux-saga/effects";
import BaseService from '../../app/services/BaseService';

import * as actions from "../actions/index";

export function* authUserSaga(action) {
    yield put(actions.authStart());
    const authData = {
      'Username': action.username
    },
    authUrl = '/users/login';
    try {
      const response = yield BaseService.makecall({url: authUrl, data: authData});
      if(response.data){
        yield put(
          actions.authSuccess(response.data.userId)
        );
      }
    }
  catch(error) {
    yield put(actions.authFail('error'));
  }
    }



export function* authPwdSaga(action) {
    yield put(actions.authPwdStart());
    const authData = {
      'Username': action.user,
      'Password' : action.pwd
    },
    authUrl = '/users/verifyPwd';
    try {
      const response = yield BaseService.makecall({url: authUrl, data: authData});
      if(response.data === 'Success'){
        yield put(
          actions.authPwdSuccess('success')
        );
      }
    }
  catch(error) {
    yield put(actions.authPwdFail('error'));
  }
    }

