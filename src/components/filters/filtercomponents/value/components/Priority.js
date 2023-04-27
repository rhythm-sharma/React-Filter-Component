import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { priorityOptions } from "../../../../../utils/config";

const Priority = ({ onChange, value }) => {
  return (
    <Autocomplete
      sx={{
        width: "100%",
      }}
      value={value}
      size="small"
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      options={priorityOptions}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default Priority;
