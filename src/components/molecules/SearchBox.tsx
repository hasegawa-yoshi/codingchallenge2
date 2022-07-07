import { Grid } from "@mui/material";
import React, { useState } from "react";

import PrimaryButton from "../atoms/PrimaryButton";
import PrimaryTextField from "../atoms/PrimaryTextField";

const SearchBox = () => {
  const [text, setText] = useState("");

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onClickSearchButton = () => {
    if (!text) return;

    setText("");
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding={2}
    >
      <Grid item xs={1}></Grid>
      <Grid item xs={7}>
        <PrimaryTextField value={text} onChange={onChangeText} />
      </Grid>
      <Grid item xs={0.5}></Grid>
      <Grid item xs={1.5}>
        <PrimaryButton onClick={onClickSearchButton} />
      </Grid>
    </Grid>
  );
};

export default SearchBox;
