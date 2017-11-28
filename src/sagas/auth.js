import { all, takeEvery, put, fork, call, select } from 'redux-saga/effects';

// action types
import { types } from '../reducers/auth';

import api, { setting as apiSetting } from '../services/api';

import localForage from "localforage";


export function* loginRequest() {

    yield takeEvery(types.LOGIN_REQUEST, processLogin);
}

export function* processLogin(action) {
    try {

        const response = yield call(api.post, 'auth/login', { ...action.payload });
        const authData = response.data;
        yield put({ type: types.LOGIN_SUCCESS, payload: { ...authData } });
    }
    catch (e) {
        let errorMessage = 'Telah terjadi kesalahan diserver!';
        if (e.response.data[0]) {
            errorMessage = e.response.data[0].message
        }
        if (e.response.data.message) {
            errorMessage = e.response.data.message
        }
        yield put({ type: types.LOGIN_FAILURE, payload: { error: errorMessage } });
    }
}

export function* loginSuccess() {

    yield takeEvery(types.LOGIN_SUCCESS, function* (action) {
        apiSetting(action.payload);
        yield localForage.setItem('melisa-auth', action.payload);
    });
}

export function* updateUser() {
    try {
        const user = yield call(api.get, 'me');
        yield put({ type: types.USER_LOGGED_IN, payload: { ...user.data } });
        //yield localForage.setItem('melisa-auth', { ...action.payload, user: user.data });
    }
    catch (e) {
        yield put({ type: types.LOGIN_FAILURE, payload: { error: e.response.data.message } });
    }
}


export function* logoutRequest() {

    yield takeEvery(types.LOGOUT_REQUEST, function* (action) {
        try {
            const logout = yield call(api.post, 'auth/logout');
            yield put({ type: types.LOGOUT_SUCCESS, payload: { logout } })
        }
        catch (e) {
            yield put({ type: types.LOGOUT_FAILURE })
        }

    });
}

export function* logoutSuccess() {
    yield takeEvery(types.LOGOUT_SUCCESS, function* (action) {
        //yield localForage.removeItem('melisa-auth');
        yield put({ type: 'RESET' });
    })
}

export function* autoLogin() {
    yield takeEvery(types.AUTO_LOGIN, function* (action) {
        try {
            const state = yield select();
            // console.log('ada', state.auth)
            //const authData = yield call(localForage.getItem, 'melisa-auth');
            if (state.auth.jwt) {
                yield put({ type: types.LOGIN_SUCCESS, payload: { ...state.auth } })
            }

            yield put({ type: types.AUTO_LOGIN_FINISH })
        }
        catch (e) {
            console.log('error', e.message);
            yield put({ type: types.AUTO_LOGIN_FINISH })
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(loginRequest),
        fork(loginSuccess),
        fork(logoutRequest),
        fork(logoutSuccess),
        fork(autoLogin)
    ]);
}