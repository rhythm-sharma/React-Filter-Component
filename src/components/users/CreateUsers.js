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
      <Box sx={styles.mainBox}>
        <TextField
          sx={styles.fields}
          placeholder="create user"
          onChange={(event) => {
            setUser(event.target.value);
          }}
        />
        <Box sx={styles.buttonBox}>
          <Button sx={styles.btn} variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            sx={styles.btn}
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

const styles = {
  mainBox: { padding: "1rem" },
  fields: { width: "100%" },
  buttonBox: { display: "flex", gap: "12px", paddingTop: "20px" },
  btn: { flex: "1 1 0" },
};

export default CreateUsers;
