import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import { appReducer } from "./reducers/app";

import { AppType, IRootState } from "./types/default";

const rootReducer = combineReducers({
    app: appReducer
});

export const mapStateToProps = (state: IRootState): AppType => ({
    league: state.league,
    club: state.club,
    profile: state.profile,
    app: state.app
});

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(logger, thunk)
);