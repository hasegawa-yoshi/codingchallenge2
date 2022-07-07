import { TextField } from "@mui/material";
import React from "react";

type props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PrimaryTextField = (props: props) => {
  return (
    <TextField
      value={props.value}
      onChange={props.onChange}
      id="outlined-basic"
      label="地名を入力"
      variant="outlined"
      fullWidth
      size="small"
      style={{ backgroundColor: "white" }}
    />
  );
};

export default PrimaryTextField;
