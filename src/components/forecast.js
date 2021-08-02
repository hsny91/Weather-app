import React, { useReducer, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ForecastService from "../service/forecastService";
import Result from "./result";

//import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      marginTop:"25px"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));


export default function Forecast() {
const classes = useStyles();
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  const [city, setCity] = useReducer(formReducer, {});
  const [forecast, setForecast] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    setForecast(await ForecastService.getWeatherForecastService(city.cityName))
  };

  const handleChange = (event) => {
    setCity({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <>
     <Grid item>
     <Paper component="form" onSubmit={handleSubmit} className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search a City"
        inputProps={{ 'aria-label': 'search a City' }}
        onChange={handleChange}
        type="text"
        name="cityName"
        id="cityName"
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
    </Paper>
    </Grid>
    <Grid item>
    {forecast.length !==0 &&
    <Result forecast={forecast}/>}
    </Grid>
   
    </>
  );

}
