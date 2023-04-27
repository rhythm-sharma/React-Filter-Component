import React, { useMemo, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  updateOnFilterValueChange,
  updateOnChildFilterValueChange,
} from "../../../../store/reducers/filter";
import { operationOptions, fieldOptions } from "../../../../utils/config";

const Field = ({ index, childIndex, isGroupFilter = false }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const value = useMemo(
    () =>
      isGroupFilter
        ? filter?.fields[index]?.fieldGroup[childIndex]?.field
        : filter?.fields[index]?.field,
    [filter?.fields, index, isGroupFilter, childIndex]
  );

  const onChange = useCallback(
    (event, newValue, reason) => {
      isGroupFilter
        ? dispatch(
            updateOnChildFilterValueChange({
              index,
              childIndex,
              newValue: { field: newValue, operation: null, values: null },
            })
          )
        : dispatch(
            updateOnFilterValueChange({
              index,
              newValue: { field: newValue, operation: null, values: null },
            })
          );
    },
    [dispatch, index, childIndex, isGroupFilter]
  );

  return (
    <Autocomplete
      sx={{
        width: operationOptions[value] === null ? "100%" : "33.33%",
      }}
      size="small"
      value={value}
      options={fieldOptions.map((option) => option)}
      getOptionLabel={(option) => option ?? ""}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
};

export default Field;
