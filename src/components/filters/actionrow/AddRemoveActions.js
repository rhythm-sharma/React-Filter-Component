import React, { useCallback } from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import {
  updateOnAddFilter,
  updateOnAddChildFilter,
  updateOnAddGroup,
  clearAllFilters,
  clearAllGroupFilters,
} from "../../../store/reducers/filter";

const AddRemoveActions = ({ isGroupFilter = false, index }) => {
  const dispatch = useDispatch();

  const handleOnAddFilter = useCallback(() => {
    isGroupFilter
      ? dispatch(updateOnAddChildFilter(index))
      : dispatch(updateOnAddFilter());
  }, [dispatch, isGroupFilter, index]);

  const handleOnAddGroup = useCallback(() => {
    dispatch(updateOnAddGroup());
  }, [dispatch]);

  const handleOnClearAllFilter = useCallback(() => {
    isGroupFilter
      ? dispatch(clearAllGroupFilters(index))
      : dispatch(clearAllFilters());
  }, [dispatch, isGroupFilter, index]);

  return (
    <Box sx={styles.mainBox}>
      <Button
        size="small"
        variant="text"
        startIcon={<AddIcon />}
        onClick={handleOnAddFilter}
      >
        Add filter
      </Button>
      {!isGroupFilter && (
        <Button
          sx={styles.btn}
          size="small"
          variant="text"
          onClick={handleOnAddGroup}
          startIcon={<AddIcon />}
        >
          Add group
        </Button>
      )}
      <Button
        sx={styles.clearBtn}
        size="small"
        variant="text"
        onClick={handleOnClearAllFilter}
      >
        {isGroupFilter ? "Clear group" : "Clear all filters"}
      </Button>
    </Box>
  );
};

const styles = {
  mainBox: {
    display: "flex",
    flexDirection: "row",
    ".MuiButtonBase-root": {
      textTransform: "none",
    },
    "&:hover .MuiButtonBase-root": {
      visibility: "visible",
    },
  },
  btn: { fontSize: "12px", visibility: "hidden" },
  clearBtn: { marginLeft: "auto", fontSize: "12px", visibility: "hidden" },
};

export default AddRemoveActions;
