import React, { useCallback, useMemo } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { componentType } from "../../../../utils/config";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFilterGroupOps,
  updateChildFilterGroupOps,
} from "../../../../store/reducers/filter";

const operationList = ["AND", "OR"];

const QueryOperationDropDown = ({
  isGroupFilter = false,
  index,
  childIndex,
}) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const idx = isGroupFilter ? childIndex : index;

  const type = idx === 0 ? componentType.TEXT : componentType.DROPDOWN;

  const value = useMemo(
    () =>
      isGroupFilter
        ? filter?.fields[index]?.filterGroupOps
        : filter.filterGroupOps,
    [filter?.fields, filter.filterGroupOps, index, isGroupFilter]
  );

  const onChange = useCallback(
    (event, newValue, reason) => {
      isGroupFilter
        ? dispatch(
            updateChildFilterGroupOps({
              index,
              newValue,
            })
          )
        : dispatch(updateFilterGroupOps(newValue));
    },
    [dispatch, index, isGroupFilter]
  );

  if (type === componentType.DROPDOWN) {
    return (
      <Autocomplete
        size="small"
        disableClearable
        value={value}
        disabled={idx > 1}
        getOptionLabel={(option) => option ?? ""}
        options={operationList.map((option) => option)}
        renderInput={(params) => <TextField {...params} />}
        onChange={onChange}
      />
    );
  }

  if (type === componentType.TEXT) {
    return <Typography sx={{ textAlign: "center" }}>Where</Typography>;
  }
};

export default QueryOperationDropDown;
