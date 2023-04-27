import React, { useState, useCallback } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from "../common/Modal";
import { addTags } from "../../store/reducers/filter";
import { useDispatch } from "react-redux";

const CreateTag = ({ isVisible, handleClose }) => {
  const dispatch = useDispatch();

  const [tag, setTag] = useState("");

  const handleOnAddTags = useCallback(() => {
    if (tag) {
      dispatch(addTags(tag));
      handleClose();
    }
  }, [dispatch, tag, handleClose]);

  return (
    <Modal
      open={isVisible}
      handleClose={handleClose}
      title={<Typography variant="h6">Create Tag</Typography>}
    >
      <Box sx={{ padding: "1rem" }}>
        <TextField
          sx={{ width: "100%" }}
          placeholder="create tag"
          onChange={(event) => {
            setTag(event.target.value);
          }}
        />
        <Box sx={{ display: "flex", gap: "12px", paddingTop: "20px" }}>
          <Button
            sx={{ flex: "1 1 0" }}
            variant="outlined"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{ flex: "1 1 0" }}
            variant="contained"
            onClick={handleOnAddTags}
          >
            Create tag
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateTag;
