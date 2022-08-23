import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Loading = () => {
  const latlngSelector = useSelector((state: any) => state.LatLngReducer);
  const dispatch = useDispatch();

  console.log(latlngSelector);

  const [lat, setLat] = useState(999);
  const [lng, setLng] = useState(999);
  useEffect(() => {
    if (navigator.geolocation) {
      const success = (position: any) => {
        let data = position.coords;
        setLat(data.latitude);
        setLng(data.longitude);
        console.log(`緯度は${lat}です`);
        console.log(`経度は${lng}です`);
      };

      const error = (error: any) => {
        console.log(`エラーコード${error}`);
      };

      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("現在位置を取得できません");
    }
  }, [lat, lng]);

  useEffect(() => {
    const latlngfunction = () => {
      dispatch({
        type: "LAT_LNG",
        payload: {
          lat: lat,
          lng: lng,
        },
      });
    };
    latlngfunction();
  }, [lat, lng, dispatch]);

  return (
    <div className="App">
      <p>Loading..</p>
    </div>
  );
};

export default Loading;
