
import { persistCombineReducers } from 'redux-persist';

//localForage
import localForage from 'localforage';
//reducers
import auth from './auth';
import app from './app';

//config redux persist
const config = {
    key: 'root',
    storage: localForage,
}

const rootReducer = persistCombineReducers(config, {
    app,
    auth
});

export default rootReducer;