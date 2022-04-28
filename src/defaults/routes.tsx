import React from "react";
import {
    Routes as Router,
    Route
} from "react-router-dom";

import { Club, Home, League, NoMatch } from "../views";
import { RoutesEnum } from "./routesEnum";

type Props = {
}

const Routes: React.FC<Props> = (): JSX.Element => {
    return (
        <Router>
            <Route
                path={RoutesEnum.HOME}
                element={
                    <Home />
                }
            />

            <Route
                path={RoutesEnum.LEAGUE}
                element={
                    <League />
                }
            />

            <Route
                path={RoutesEnum.CLUB}
                element={
                    <Club />
                }
            />

            <Route
                path='*'
                element={
                    <NoMatch />
                }
            />
        </Router>
    )
}

export default Routes