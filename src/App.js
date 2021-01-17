import './App.css';
import { Box, makeStyles } from "@material-ui/core";
import { Body, Header } from './layouts';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

function App() {
  const classes = useStyles();
  const showHeader = window.location.hash !== '#/hack-the-northeast/signup' && window.location.hash !== '#/hack-the-northeast/login';
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        {showHeader && <Header colour="default" />}
        <Body />
      </Box>
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
}));
export default App;
