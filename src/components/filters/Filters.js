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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          width: "850px",
          padding: "1rem",
          maxHeight: "100vh",
          overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "2rem",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "500",
              marginRight: "auto",
            }}
          >
            Filters
          </Typography>
          <Button onClick={showTag} startIcon={<AddIcon />} variant="outlined">
            Create Tag
          </Button>
          <Button onClick={showUser} startIcon={<AddIcon />} variant="outlined">
            Create User
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {filter.fields.map((item, index) => (
            <Box key={item.key}>
              <FilterSection item={item} index={index} />
            </Box>
          ))}
        </Box>
        <Box sx={{ marginTop: "10px" }}>
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

export default Filters;
