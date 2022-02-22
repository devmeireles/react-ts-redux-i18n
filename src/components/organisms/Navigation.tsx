import React, { Dispatch } from "react";
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import { Brightness7TwoTone, Brightness4TwoTone } from "@mui/icons-material"
import { connect, ConnectedProps } from "react-redux";

import { mapStateToProps } from "../../store";
import { setTheme, setLanguage } from '../../store/actions/app';
import { useTranslation } from "react-i18next";

const mapDispatchToProps = (dispatch: Dispatch<any>) => (
    {
        _setTheme: (props: string) => dispatch(setTheme(props)),
        _setLanguage: (props: string) => dispatch(setLanguage(props)),
    }
)

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = & ConnectedProps<typeof connector>

const Navigation: React.FC<Props> = ({ app, _setTheme, _setLanguage }): JSX.Element => {
    const { t } = useTranslation();
    const changeTheme = () => _setTheme((app.theme === "light") ? "dark" : "light");
    const changeLanguage = () => _setLanguage(app.language === "en" ? "pt" : "en");

    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    {t("basics.welcome")}
                </Typography>

                <IconButton sx={{ ml: 1 }} onClick={() => changeTheme()} color="inherit">
                    {app.theme === 'dark' ? <Brightness7TwoTone /> : <Brightness4TwoTone />}
                </IconButton>

                <IconButton sx={{ ml: 1 }} onClick={() => changeLanguage()} color="inherit">
                    {app.language === 'pt' ?
                        <Avatar alt="PT" src="https://flagicons.lipis.dev/flags/4x3/br.svg" />
                        : <Avatar alt="PT" src="https://flagicons.lipis.dev/flags/4x3/gb.svg" />
                    }
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default connector(Navigation)