import { InitialLeagueState } from "./League";
import { InitialClubState } from "./Club";
import { InitialProfileState } from "./Profile";
import {InitialAppState} from "./App";

export interface IRootState {
    league: any,
    club: any,
    profile: any,
    app: any,
}

export type AppType = {
    league: InitialLeagueState;
    club: InitialClubState;
    profile: InitialProfileState;
    app: InitialAppState;
}