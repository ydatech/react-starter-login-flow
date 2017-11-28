
import { all } from 'redux-saga/effects';

// sagas
import appSaga from './app';
import authSaga from './auth';

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        appSaga(),
        authSaga()
    ])
}