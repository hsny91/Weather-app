import Grid from "@material-ui/core/Grid";
import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from '@material-ui/lab';

import Forecast from "./forecast.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "30px 0",
  },
  alert: {
    width: 400,
  },
}));

export default function HomePage() {
  const classes = useStyles();

  // const API_KEY = "5fec1a9312514f5ab84aab4ed30a0beb"
  // const API_URL = `https://api.weatherbit.io/v2.0/current?&city=${city}&key=${API_KEY}&include=minutely`;
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.alert} >
        <Alert variant="outlined" severity="info">
        <AlertTitle> <strong>Weather Forecast </strong> </AlertTitle>
        Enter your City — <strong>Search it!</strong>
        </Alert>
      </Grid>
      <Grid item>
        {" "}
        <Forecast />
      </Grid>
    </Grid>
  );
}
