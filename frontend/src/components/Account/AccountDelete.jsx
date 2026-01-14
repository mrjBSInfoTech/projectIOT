import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
  Typography,
} from "@mui/material";
import { deleteUser } from "../../api/userAPI";

// Animation transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
      timeout={500}
      easing={{
        enter: "cubic-bezier(0.4, 0, 0.2, 1)",
        exit: "ease-out",
      }}
    />
  );
});

function AccountDelete({
  open,
  handleClose,
  onSubmit,
  selectedUser,
  mode = "form",
}) {
  const [loading, setLoading] = useState(false);

  // Prefill data when editing
  useEffect(() => {
    setLoading(false);
  }, [selectedUser, open]);

  // Handle Enter key for delete
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && open) {
        event.preventDefault();
        handleDelete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // 🔴 Delete confirmation submit
  const handleDelete = () => {
    setLoading(true);
    onSubmit(selectedUser?.id);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
    >
      <>
        <DialogTitle>Delete User Account</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete the user account{" "}
            <strong>{selectedUser?.username}</strong>?
          </Typography>
          <Typography sx={{ color: "error.main", mt: 2 }}>
            ⚠️ This action cannot be undone!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button 
            onClick={handleDelete} 
            color="error" 
            variant="contained"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </>
    </Dialog>
  );
}

export default AccountDelete;
