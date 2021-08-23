import React, { useState } from "react";
import ForecastMapService from '../../service/forecastMapService';
import { MapContainer, TileLayer, Marker, useMapEvents,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import Forecast from "./forecast";

function LocationMarker() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [forecast, setForecast] = useState([]);

  async function loadForecast() {
    setForecast(await ForecastMapService.getMapForecastService(position.latitude,position.longitude))
  }
  const map = useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setPosition({
        latitude: lat,
        longitude: lng,
      });
      loadForecast()
    },
  });

  return position.latitude !== 0 ? (
    <div>
      <Popup position={[position.latitude, position.longitude]}>
        Current location:{" "}
        <pre> 
          lat: {position.latitude} 
          </pre>
          <pre> 
          lng:{position.longitude}
        </pre>
      </Popup>
    <Popup position={[position.latitude, position.longitude]}>
        <Forecast latitude={position.latitude} longitude={position.longitude} forecast={forecast}/>
    </Popup>
      <Marker
        position={[position.latitude, position.longitude]}
        interactive={false}
      />
    </div>
  ) : null;
}
const MapPage = () => {
  return (
    <MapContainer
      center={[37.8189, -122.4786]}
      zoom={13}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapPage;
