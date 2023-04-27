import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { dependencyOptions } from "../../../../../utils/config";

const Dependency = ({ onChange, value }) => {
  return (
    <Autocomplete
      sx={{
        width: "100%",
      }}
      value={value ?? ""}
      size="small"
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      options={dependencyOptions}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default Dependency;
