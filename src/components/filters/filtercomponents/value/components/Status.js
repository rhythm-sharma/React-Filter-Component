import React from "react";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { statusOptions } from "../../../../../utils/config";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Status = ({ onChange, value }) => {
  return (
    <Autocomplete
      sx={{ width: "100%" }}
      size="small"
      multiple
      options={statusOptions}
      value={value ?? []}
      disableCloseOnSelect
      limitTags={1}
      getOptionLabel={(option) => option ?? ""}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default Status;
