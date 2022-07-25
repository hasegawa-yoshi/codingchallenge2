import { LatLng } from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  const MapContainerStyle = {
    width: "100%",
    height: "250px",
    zIndex: 3,
  };
  const position = new LatLng(35.282, 137.014);
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
