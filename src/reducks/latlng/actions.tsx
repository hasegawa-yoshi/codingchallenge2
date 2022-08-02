export const LAT_LNG = "LAT_LNG";
export const LatLngAction = (latlngState: any) => {
  return {
    type: "LAT_LNG",
    payload: {
      lat: latlngState.lat,
      lng: latlngState.lng,
    },
  };
};
