import React, { useCallback, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from "../common/Modal";
import { addUsers } from "../../store/reducers/filter";
import { useDispatch } from "react-redux";

const CreateUsers = ({ isVisible, handleClose }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState("");

  const handleOnAddUsers = useCallback(() => {
    dispatch(addUsers(user));
    handleClose();
  }, [dispatch, user, handleClose]);

  return (
    <Modal
      open={isVisible}
      handleClose={handleClose}
      title={<Typography variant="h6">Create User</Typography>}
    >
      <Box sx={{ padding: "1rem" }}>
        <TextField
          sx={{ width: "100%" }}
          placeholder="create user"
          onChange={(event) => {
            setUser(event.target.value);
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
            onClick={handleOnAddUsers}
          >
            Create user
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateUsers;
