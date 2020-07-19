import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Routes from "./routes/Routes";
import { Grid } from "@material-ui/core";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Grid container direction="row">
          
          <Grid
            className="wrapperContainer"
            container
            justify="center"
            item
            xs={12}
          >
            <Grid item container xs={12}>
              <NavBar />
            </Grid>
            <Grid container item xs={12}>
              <Routes />
            </Grid>
            <Grid item container xs={12}>
              <Footer/>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
