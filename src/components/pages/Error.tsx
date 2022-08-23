import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import HeaderComponents from "../organisms/HeaderComponents";

const Error = () => {
  const history = useHistory();

  const onClickReturnButton = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <div className="App">
      <HeaderComponents />
      <br />
      <br />
      <br />
      <br />
      <p>無効な文字列です</p>
      <p>他の文字列での検索をお試しください</p>
      <Button onClick={onClickReturnButton} variant="outlined">
        現在地に戻る
      </Button>
    </div>
  );
};

export default Error;
