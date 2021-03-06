export const types = {
    AUTO_LOGIN: 'my-app/auth/AUTO_LOGIN',
    AUTO_LOGIN_FINISH: 'my-app/auth/AUTO_LOGIN_FINISH',
    LOGIN_REQUEST: 'my-app/auth/LOGIN_REQUEST',
    LOGIN_SUCCESS: 'my-app/auth/LOGIN_SUCCESS',
    LOGIN_FAILURE: 'my-app/auth/LOGIN_FAILURE',
    USER_LOGGED_IN: 'my-app/auth/USER_LOGGED_IN',
    LOGOUT_REQUEST: 'my-app/auth/LOGOUT_REQUEST',
    LOGOUT_SUCCESS: 'my-app/auth/LOGOUT_SUCCESS',
    LOGOUT_FAILURE: 'my-app/auth/LOGOUT_FAILURE',
    UPDATE_AUTH_USER: 'my-app/auth/UPDATE_AUTH_USER',
}

export const initialState = {
    isLoggedIn: true,
    user: {},
    isLoading: false,
    error: [],
    jwt: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return { ...state, isLoading: true, error: [] };

        case types.LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, user: action.payload.user, jwt: action.payload.jwt };

        case types.LOGIN_FAILURE:
            return { ...state, isLoading: false, error: action.payload.error };
        case types.LOGOUT_REQUEST:
            return { ...state, isLoading: true };
        case types.LOGOUT_SUCCESS:
            return { ...state, user: {}, jwt: '', isLoggedIn: false, isLoading: false };
        case types.LOGOUT_FAILURE:
            return { ...state, isLoading: false };
        case types.USER_LOGGED_IN:
            return { ...state, user: action.payload, isLoading: false };
        case types.UPDATE_AUTH_USER:
            return { ...state, user: { ...state.user, ...action.payload.user } };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export const actions = {
    login: (email, password) => ({ type: types.LOGIN_REQUEST, payload: { email, password } }),
    autoLogin: () => ({ type: types.AUTO_LOGIN }),
    logout: () => ({ type: types.LOGOUT_REQUEST })
}