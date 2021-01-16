import './App.css';
import { Container } from "@material-ui/core";
import { Body, Footer, Header } from './layouts';

function App() {
  return (
    <div>
      <Header />
      <div style= {{height:"1000px", display: "flex", flexDirection:"column", justifyContent: "space-between"}}>
        <Body />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
