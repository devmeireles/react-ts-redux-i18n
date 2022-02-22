import { AppActionTypes } from "../actions/app";
import { InitialAppState } from "../types/App"

const initialAppState: InitialAppState = {
    theme: 'light',
    language: 'pt',
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
    }

    return state;
}