import React from "react";
import {
    Routes as Router,
    Route
} from "react-router-dom";
import Profile from "../views/Profile";
import { RoutesEnum } from "./routesEnum";

type Props = {
}

const Routes: React.FC<Props> = (): JSX.Element => {
    return (
        <Router>
            <Route
                path={RoutesEnum.PROFILE}
                element={
                    <Profile />
                }
            />

            <Route
                path={RoutesEnum.COMPANY}
                element={
                    <Profile />
                }
            />

            <Route
                path={RoutesEnum.PARTY}
                element={
                    <Profile />
                }
            />
        </Router>
    )
}

export default Routes