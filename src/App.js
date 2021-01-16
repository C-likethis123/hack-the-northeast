import './App.css';
import { makeStyles } from "@material-ui/core";
import { Body, Footer, Header } from './layouts';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Body />
      <Footer />
      {/* <div className={classes.pinkBackground}>
        <div class="red">Red1</div>
        <div class="red">Red1</div>

        <div class="red">Red1</div>
        <div class="red">Red1</div>
        <div class="red">Red1</div>

      </div> */}
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
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
