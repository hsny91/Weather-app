import Grid from "@material-ui/core/Grid";
import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from '@material-ui/lab';
import backgroud from '../components/bg.jpeg'

import Forecast from "./forecast.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height:"100vh"
  },
  alert: {
    width: 400,
  },
}));

export default function SearchPage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item ></Grid>
      <Grid item className={classes.alert} >
        <Alert  severity="info">
        <AlertTitle> <strong>Weather Forecast </strong> </AlertTitle>
        Enter your City — <strong>Search it!</strong>
        </Alert>
      </Grid>
      <Grid item>
        <Forecast />
      </Grid>
    </Grid>
  );
}

