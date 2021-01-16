import './App.css';
import { Box, makeStyles } from "@material-ui/core";
import { Body, Header } from './layouts';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

function App() {
  const classes = useStyles();
  const isSignUp = window.location.pathname === '/signup';
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        {!isSignUp && <Header />}
        <Body />
        {/* <div className={classes.pinkBackground}>
        <div class="red">Red1</div>
        <div class="red">Red1</div>

        <div class="red">Red1</div>
        <div class="red">Red1</div>
        <div class="red">Red1</div>

      </div> */}
      </Box>
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  background: {
    backgroundColor: theme.palette.primary.main,
  },
  pinkBackground: {
    backgroundColor: 'pink',
    // adding your own css selectors to target more nested classes
    '& .red': {
      backgroundColor: 'red',
    }
  }
}));
export default App;
