import { LatLng } from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";

const Map = () => {
  const latlngSelector = useSelector((state: any) => state.LatLngReducer);

  const [lat, setLat] = useState(35);
  const [lng, setLng] = useState(135);

  const [position, setPosition] = useState(new LatLng(lat, lng));

  useEffect(() => {
    setLat(latlngSelector.lat);
    setLng(latlngSelector.lng);
    console.log(lat);
    setPosition(new LatLng(lat, lng));
  }, [lat, lng, latlngSelector.lat, latlngSelector.lng]);

  const MapContainerStyle = {
    width: "100%",
    height: "250px",
    zIndex: 3,
  };

  const zoom = 10;
  return (
    <MapContainer center={position} zoom={zoom} style={MapContainerStyle}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
