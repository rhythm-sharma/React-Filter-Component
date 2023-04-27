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
      <Box sx={styles.mainBox}>
        <TextField
          sx={styles.fields}
          placeholder="create tag"
          onChange={(event) => {
            setTag(event.target.value);
          }}
        />
        <Box sx={{ display: "flex", gap: "12px", paddingTop: "20px" }}>
          <Button sx={styles.btn} variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={styles.btn} variant="contained" onClick={handleOnAddTags}>
            Create tag
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const styles = {
  mainBox: { padding: "1rem" },
  fields: { width: "100%" },
  buttonBox: { display: "flex", gap: "12px", paddingTop: "20px" },
  btn: { flex: "1 1 0" },
};

export default CreateTag;
