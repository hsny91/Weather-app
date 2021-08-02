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
      <div className={classes.city} >{props.forecast.data.data[0].city_name}</div>
      <div>
        <img
          src={`https://www.weatherbit.io/static/img/icons/${props.forecast.data.data[0].weather.icon}.png`}
        ></img>
      </div>
      <div className="description">
        {props.forecast.data.data[0].weather.description}
      </div>
    </>
  );
}
