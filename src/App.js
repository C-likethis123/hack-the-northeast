import './App.css';
import React from 'react';
import { Box, makeStyles } from "@material-ui/core";
import { Body } from './layouts';
import { ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import theme from "./theme";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Body />
        <ToastContainer hideProgressBar />
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
