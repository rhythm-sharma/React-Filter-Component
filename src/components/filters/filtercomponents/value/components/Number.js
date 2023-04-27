import React from "react";
import { TextField } from "@mui/material";

const Number = ({ onChange, value }) => {
  return (
    <TextField
      sx={{ width: "100%" }}
      size="small"
      type="number"
      value={value ?? ""}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      variant="outlined"
    />
  );
};

export default Number;
