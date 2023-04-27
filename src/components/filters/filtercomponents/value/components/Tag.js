import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";

const Tag = ({ onChange, value }) => {
  const tagOptions = useSelector((state) => state.filter.tagOptions);
  return (
    <Autocomplete
      sx={{
        width: "100%",
      }}
      multiple
      value={value ?? []}
      limitTags={1}
      size="small"
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      options={tagOptions}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default Tag;
