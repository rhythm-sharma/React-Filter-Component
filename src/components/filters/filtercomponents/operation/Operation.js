import React, { useMemo, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  updateOnFilterValueChange,
  updateOnChildFilterValueChange,
} from "../../../../store/reducers/filter";
import { operationOptions, valueComponentType } from "../../../../utils/config";

const Operation = ({ index, childIndex, isGroupFilter = false }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const fieldValue = useMemo(
    () =>
      isGroupFilter
        ? filter?.fields[index]?.fieldGroup[childIndex]?.field
        : filter?.fields[index]?.field,
    [filter?.fields, index, isGroupFilter, childIndex]
  );

  const value = useMemo(
    () =>
      isGroupFilter
        ? filter?.fields[index]?.fieldGroup[childIndex]?.operation
        : filter?.fields[index]?.operation,
    [filter?.fields, index, isGroupFilter, childIndex]
  );

  const valueComponent = useMemo(() => {
    return (
      operationOptions[fieldValue]?.find(({ label }) => label === value)
        ?.valueComponent ?? ""
    );
  }, [fieldValue, value]);

  const onChange = useCallback(
    (event, newValue, reason) => {
      isGroupFilter
        ? dispatch(
            updateOnChildFilterValueChange({
              index,
              childIndex,
              newValue: {
                operation: newValue,
                values: null,
              },
            })
          )
        : dispatch(
            updateOnFilterValueChange({
              index,
              newValue: {
                operation: newValue,
                values: null,
              },
            })
          );
    },
    [dispatch, index, childIndex, isGroupFilter]
  );

  if (!fieldValue || !operationOptions[fieldValue]) {
    return null;
  }

  return (
    <Autocomplete
      sx={{
        width: valueComponent === valueComponentType.NONE ? "66.66%" : "33.33%",
      }}
      size="small"
      value={value}
      options={operationOptions[fieldValue]?.map(({ label }) => label) ?? []}
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

export default Operation;
