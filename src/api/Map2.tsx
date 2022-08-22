import { LatLngLiteral } from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";

const Map2 = () => {
  const latlngSelector = useSelector((state: any) => state.LatLngReducer);

  const MapContainerStyle = {
    width: "100%",
    height: "250px",
    zIndex: 3,
  };
  const position: LatLngLiteral = {
    lat: latlngSelector.lat,
    lng: latlngSelector.lng,
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
export default Map2;
