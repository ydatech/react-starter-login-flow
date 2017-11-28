import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

import App from './App';

//components
import AppLoading from './components/AppLoading';

import registerServiceWorker from './registerServiceWorker';


//redux-persist
import { persistStore } from 'redux-persist';

// redux persist react integration
import { PersistGate } from 'redux-persist/es/integration/react';


// import authActions
import { actions as authActions } from './reducers/auth'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);
const persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            loading={<AppLoading />}
            onBeforeLift={() => { store.dispatch(authActions.autoLogin()) }}
            persistor={persistor}
        >
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));



registerServiceWorker();
