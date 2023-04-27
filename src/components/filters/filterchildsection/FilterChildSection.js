import React, { useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import QueryOperationDropDown from "../filtercomponents/queryoperation/QueryOperationDropDown";
import Operation from "../filtercomponents/operation/Operation";
import ValueDropDown from "../filtercomponents/value/ValueDropDown";
import Field from "../filtercomponents/field/Field";
import { deleteChildFilter } from "../../../store/reducers/filter";
import { useDispatch } from "react-redux";

const FilterChildSection = ({ index, childIndex }) => {
  const dispatch = useDispatch();

  const onDeleteChildFilterRow = useCallback(() => {
    dispatch(deleteChildFilter({ index, childIndex }));
  }, [dispatch, index, childIndex]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Box sx={{ minWidth: "92px" }}>
        <QueryOperationDropDown
          isGroupFilter={true}
          index={index}
          childIndex={childIndex}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "10px",
        }}
      >
        <Field index={index} childIndex={childIndex} isGroupFilter={true} />
        <Operation index={index} childIndex={childIndex} isGroupFilter={true} />
        <ValueDropDown
          index={index}
          childIndex={childIndex}
          isGroupFilter={true}
        />
      </Box>
      <IconButton onClick={() => onDeleteChildFilterRow()}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default FilterChildSection;
