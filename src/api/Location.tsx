import React, { useEffect, useState } from "react";

const Location = () => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
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
  return (
    <div>
      <h3>現在地</h3>
      <p>緯度：{lat}</p>
      <p>経度：{lng}</p>
    </div>
  );
};

export default Location;
