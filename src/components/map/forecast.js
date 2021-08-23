import React, { useEffect, useState } from 'react';

export default function Forecast(props) {    
    return (
        <div>
           Temp: {props.forecast.temperature}
           <div>
           Lat: {props.latitude}
           </div>
          <div>
          Lng: {props.longitude}
          </div>
        
        </div>
    )
}
