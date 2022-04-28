import React, { Dispatch } from 'react';
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { connect, ConnectedProps } from "react-redux";

import { mapStateToProps } from "./store";
import Navigation from './components/organisms/Navigation';
import { dark, light } from './defaults/themes'

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({})

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = & ConnectedProps<typeof connector>

const App: React.FC<Props> = ({ children, app }) => {
  const choosePallet = app.theme === 'dark' ? dark : light;

  const theme = createTheme({
    palette: { ...choosePallet }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <Navigation />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default connector(App)