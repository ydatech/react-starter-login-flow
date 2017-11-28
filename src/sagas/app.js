import { all, takeEvery, put, fork } from 'redux-saga/effects';


// action types
import { types } from '../reducers/app';



export function* watchAll() {

    yield takeEvery('*', function* (action) {

        if (action.type.includes('FAILURE'))
            yield put({ type: types.SHOW_SNACKBAR, snackbarMessage: action.payload.error })


    });
}

export default function* rootSaga() {
    yield all([
        fork(watchAll)
    ]);
}