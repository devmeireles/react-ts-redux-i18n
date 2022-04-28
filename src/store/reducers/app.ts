import { AppActionTypes } from "../actions/app";
import { InitialAppState } from "../types/App"

const initialAppState: InitialAppState = {
    theme: 'dark',
    language: 'en',
    loading: false
}

export const appReducer = (state = initialAppState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case AppActionTypes.SET_THEME:
            state = {
                ...state,
                theme: action.payload
            }
            break;
        case AppActionTypes.SET_LANGUAGE:
            state = {
                ...state,
                language: action.payload
            }
            break;
        case AppActionTypes.SET_LOADING:
            state = {
                ...state,
                loading: action.payload
            }
            break;
    }

    return state;
}