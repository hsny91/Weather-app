import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  city: {
    marginTop: "25px",
  },
}));

export default function Result(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.city} >{props.forecast.data[0].city_name}</div>
      <div>
        <img
          src={`https://www.weatherbit.io/static/img/icons/${props.forecast.data[0].weather.icon}.png`}
        ></img>
      </div>
      <div className="description">
        {props.forecast.data[0].weather.description}
      </div>
     <br></br>
     <div className="temp">
       Temparature:
        {props.forecast.data[0].app_temp}
      </div>
     <br></br>
      <div className="sunrise">
        Sunrise:
      {props.forecast.data[0].sunrise}
      </div>
      <br></br>
      <div className="sunset">
        Sunset:
      {props.forecast.data[0].sunset}
      </div>
    </>
  );
}
