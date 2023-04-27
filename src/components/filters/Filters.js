import React, { useCallback } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import FilterSection from "./filtersection/FilterSection";
import AddRemoveActions from "./actionrow/AddRemoveActions";
import { useSelector } from "react-redux";
import CreateTag from "../tags/CreateTags";
import CreateUser from "../users/CreateUsers";
import AddIcon from "@mui/icons-material/Add";
import useBoolean from "../../hooks/useBoolean";

const Filters = () => {
  const filter = useSelector((state) => state.filter.filter);

  const [isTagVisible, showTag, hideTag] = useBoolean();
  const [isUserVisible, showUser, hideUser] = useBoolean();

  const onHideTag = useCallback(() => {
    hideTag();
  }, [hideTag]);

  const onHideUser = useCallback(() => {
    hideUser();
  }, [hideUser]);

  return (
    <Box sx={styles.mainBox}>
      <Paper sx={styles.paper}>
        <Box sx={styles.header}>
          <Typography sx={styles.heading}>Filters</Typography>
          <Button onClick={showTag} startIcon={<AddIcon />} variant="outlined">
            Create Tag
          </Button>
          <Button onClick={showUser} startIcon={<AddIcon />} variant="outlined">
            Create User
          </Button>
        </Box>
        <Box sx={styles.filterSection}>
          {filter.fields.map((item, index) => (
            <Box key={item.key}>
              <FilterSection item={item} index={index} />
            </Box>
          ))}
        </Box>
        <Box sx={styles.actionBox}>
          <AddRemoveActions />
        </Box>
      </Paper>
      {isTagVisible && (
        <CreateTag isVisible={isTagVisible} handleClose={onHideTag} />
      )}
      {isUserVisible && (
        <CreateUser isVisible={isUserVisible} handleClose={onHideUser} />
      )}
    </Box>
  );
};

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  paper: {
    width: "850px",
    padding: "1rem",
    maxHeight: "100vh",
    overflowY: "scroll",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "2rem",
    gap: "10px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "500",
    marginRight: "auto",
  },
  filterSection: { display: "flex", flexDirection: "column", gap: "10px" },
  actionBox: { marginTop: "10px" },
};

export default Filters;
