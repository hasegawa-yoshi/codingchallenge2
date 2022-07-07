import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = (props: any) => {
  return (
    <Button
      onClick={props.onClick}
      variant="outlined"
      fullWidth
      style={{ backgroundColor: "blue", color: "white" }}
    >
      検索
    </Button>
  );
};

export default PrimaryButton;
