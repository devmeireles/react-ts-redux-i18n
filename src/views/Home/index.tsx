import { Grid, Paper } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { connect, ConnectedProps } from "react-redux";
import { mapStateToProps } from "../../store";
import { setLoading } from "../../store/actions/app";
import { IClub } from "../../types/Club";

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => (
    {
        getLeagues: () => dispatch(() => []),
        _setLoading: (state: boolean) => dispatch((state: boolean) => setLoading(state))
    }
)

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = & ConnectedProps<typeof connector>

const Home: React.FC<Props> = ({
    _setLoading,
    getLeagues,
    league
}): JSX.Element => {
    const { t } = useTranslation();
    const [data, setData] = React.useState<IClub[] | void>()

    React.useEffect(() => {
        (async () => {
            _setLoading(true);
            if (!league?.leagues) setData(getLeagues())
            _setLoading(true);
        })()
    }, [league])

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default connector(Home)