import React, { useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import QueryOperationDropDown from "../filtercomponents/queryoperation/QueryOperationDropDown";
import Operation from "../filtercomponents/operation/Operation";
import ValueDropDown from "../filtercomponents/value/ValueDropDown";
import Field from "../filtercomponents/field/Field";
import FilterChildSection from "../filterchildsection/FilterChildSection";
import AddRemoveActions from "../actionrow/AddRemoveActions";
import { deleteFilter } from "../../../store/reducers/filter";
import { useDispatch } from "react-redux";

const FilterGroup = ({ item, index }) => {
  return (
    <Box sx={styles.groupBox}>
      <Box sx={styles.operationDp}>
        <QueryOperationDropDown index={index} />
      </Box>
      <Box sx={styles.childSection}>
        {item?.fieldGroup?.map((itm, idx) => (
          <Box key={itm.key}>
            <FilterChildSection index={index} childIndex={idx} />
          </Box>
        ))}
        <Box sx={styles.action}>
          <AddRemoveActions isGroupFilter={true} index={index} />
        </Box>
      </Box>
    </Box>
  );
};

const FilterSimple = ({ index }) => {
  const dispatch = useDispatch();

  const onDeleteFilterRow = useCallback(() => {
    dispatch(deleteFilter({ index }));
  }, [dispatch, index]);

  return (
    <Box sx={styles.simpleBox}>
      <Box sx={styles.operationDp}>
        <QueryOperationDropDown index={index} />
      </Box>

      <Box sx={styles.row}>
        <Field index={index} />
        <Operation index={index} />
        <ValueDropDown index={index} />
      </Box>

      <IconButton onClick={onDeleteFilterRow}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

const FilterSection = ({ item, index }) => {
  return (
    <Box>
      {item.group ? (
        <FilterGroup item={item} index={index} />
      ) : (
        <FilterSimple index={index} />
      )}
    </Box>
  );
};

export const styles = {
  groupBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
  operationDp: { minWidth: "92px" },
  childSection: {
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid #e8eaee",
    paddingLeft: "10px",
    width: "100%",
    gap: "10px",
  },
  action: { marginTop: "10px" },
  simpleBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: "10px",
  },
};

export default FilterSection;
