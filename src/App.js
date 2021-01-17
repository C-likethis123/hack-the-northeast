import './App.css';
import React from 'react';
import { Box, makeStyles } from "@material-ui/core";
import { Body } from './layouts';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Body />
      </Box>
    </ThemeProvider>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
}));
export default App;
