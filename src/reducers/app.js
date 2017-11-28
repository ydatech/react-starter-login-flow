export const types = {
    LOAD_DATA: 'melisa/app/LOAD_DATA', // Triggers a saga that 1) makes some HTTP requests 2) updates other reducers
    LOAD_DATA_FINISH: 'melisa/app/LOAD_DATA_FINISH',
    SHOW_SNACKBAR: 'melisa/app/SHOW_SNACKBAR',
    HIDE_SNACKBAR: 'melisa/app/HIDE_SNACKBAR',
    SHOW_DRAWER: 'melisa/app/SHOW_DRAWER',
    HIDE_DRAWER: 'melisa/app/HIDE_DRAWER',
    SHOW_LOADING: 'melisa/app/SHOW_LOADING',
    HIDE_LOADING: 'melisa/app/HIDE_LOADING',
    ACTIVATE_CHAT_ID: 'melisa/app/ACTIVATE_CHAT_ID',
    SYNC_DATA: 'melisa/app/SYNC_DATA',
    SYNC_DATA_FINISH: 'melisa/app/SYNC_DATA_FINISH',
    LOAD_RAJA_ONGKIR_KECAMATAN: 'melisa/app/LOAD_RAJA_ONGKIR_KECAMATAN',
    LOAD_RAJA_ONGKIR_KECAMATAN_SUCCESS: 'melisa/app/LOAD_RAJA_ONGKIR_KECAMATAN_SUCCESS'

}

export const initialState = {

    snackbarMessage: null,
    isDrawerVisible: false,
    isLoading: false,

}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_SNACKBAR:
            return { ...state, snackbarMessage: action.snackbarMessage };

        case types.HIDE_SNACKBAR:
            return { ...state, snackbarMessage: null };

        case types.SHOW_DRAWER:
            return { ...state, isDrawerVisible: true };

        case types.HIDE_DRAWER:
            return { ...state, isDrawerVisible: false };
        case types.SHOW_LOADING:
            return { ...state, isLoading: true };
        case types.HIDE_LOADING:
            return { ...state, isLoading: false };

        default:
            return state
    }
}

export const actions = {
    loadData: () => ({ type: types.LOAD_DATA }),
    syncData: () => ({ type: types.SYNC_DATA }),
    resetData: () => ({ type: 'RESET' }),
    showSnackbar: (snackbarMessage) => ({ type: types.SHOW_SNACKBAR, snackbarMessage }),
    hideSnackbar: () => ({ type: types.HIDE_SNACKBAR }),
    showDrawer: () => ({ type: types.SHOW_DRAWER }),
    hideDrawer: () => ({ type: types.HIDE_DRAWER }),
    activateChatID: (activeChatID) => ({ type: types.ACTIVATE_CHAT_ID, activeChatID }),
    loadRajaOngkirKecamatan: () => ({ type: types.LOAD_RAJA_ONGKIR_KECAMATAN }),

}