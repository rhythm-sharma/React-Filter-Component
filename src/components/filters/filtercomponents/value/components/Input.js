import React from "react";
import { TextField } from "@mui/material";

const Input = ({ onChange, value }) => {
  return (
    <TextField
      sx={{ width: "100%" }}
      size="small"
      value={value ?? ""}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      variant="outlined"
    />
  );
};

export default Input;
