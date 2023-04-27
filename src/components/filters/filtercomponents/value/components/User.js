import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";

const User = ({ onChange, value }) => {
  const userOptions = useSelector((state) => state.filter.userOptions);

  return (
    <Autocomplete
      sx={{ width: "100%" }}
      size="small"
      options={userOptions}
      multiple
      value={value ?? []}
      autoHighlight
      limitTags={1}
      getOptionLabel={(option) => option}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <AccountCircleIcon sx={{ marginRight: 2 }} />
          {option}
        </Box>
      )}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};

export default User;
