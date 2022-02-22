import { InitialCompanyState } from "./Company";
import { InitialPartyState } from "./Party";
import { InitialProfileState } from "./Profile";
import {InitialAppState} from "./App";

export interface IRootState {
    profile: any,
    party: any,
    company: any,
    app: any,
}

export type AppType = {
    profile: InitialProfileState;
    party: InitialPartyState;
    company: InitialCompanyState;
    app: InitialAppState;
}