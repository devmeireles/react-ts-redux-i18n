import { Dispatch } from "redux";
import i18n from "../../i18n";
import { InitialAppState } from "../types/App";

export enum AppActionTypes {
    SET_LANGUAGE = "SET_LANGUAGE",
    SET_THEME = "SET_THEME",
}

export const setTheme = (payload: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: AppActionTypes.SET_THEME,
            payload
        })
    }
}

export const setLanguage = (payload: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: AppActionTypes.SET_LANGUAGE,
            payload
        })

        i18n.changeLanguage(payload)
    }
}