import React from "react";
import { Modal as MuiModal, Box, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ open, handleClose, title, children, style }) => {
  return (
    <MuiModal open={open} onClose={handleClose}>
      <Box style={style} sx={styles.wrapper}>
        <Box sx={styles.title}>
          {title}
          <IconButton onClick={handleClose}>
            <CloseIcon size="1.4rem" />
          </IconButton>
        </Box>
        <Divider />
        <Box>{children}</Box>
      </Box>
    </MuiModal>
  );
};

const styles = {
  wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 320,
    bgcolor: "background.paper",
    borderRadius: 4,
    boxShadow: 24,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    p: "1rem 1rem 0.5rem 1rem",
  },
};

export default Modal;
