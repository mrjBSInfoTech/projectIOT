import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Slide,
  Typography,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { editUser } from "../../api/userAPI";

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

function AccountForm({
  open,
  handleClose,
  onSubmit,
  selectedUser,
  mode = "form",
}) {
  const [formData, setFormData] = useState({
    username: "",
    role: "user",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Prefill data when editing
  useEffect(() => {
    if (selectedUser) {
      setFormData({
        username: selectedUser.username || "",
        role: selectedUser.role || "user",
        password: "",
        confirmPassword: "",
      });
    } else {
      setFormData({ username: "", role: "user", password: "", confirmPassword: "" });
    }
    setError(""); // Clear error when opening dialog
  }, [selectedUser, open]);

  // Handle Enter key for both delete and submit
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && open) {
        event.preventDefault();
        if (mode === "delete") {
          handleDelete();
        } else {
          handleSubmit();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, mode, formData]);

  // Handle Esacape key for both delete and submit
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
  }, [mode, formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = () => {
    // Validate input
    if (!formData.username.trim()) {
      setError("❌ Username is required");
      return;
    }
    
    // If editing and password is provided, validate password
    if (formData.password) {
      if (formData.password.length < 6) {
        setError("❌ Password must be at least 6 characters");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("❌ Passwords do not match");
        return;
      }
    }
    
    // If adding new user, password is required
    if (!selectedUser && !formData.password) {
      setError("❌ Password is required");
      return;
    }
    
    onSubmit(formData);
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
        <DialogTitle>
          {selectedUser ? "Edit User Account" : "Add New User"}
        </DialogTitle>
        <DialogContent>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "8px" }}
            margin="dense"
            autoFocus
            error={!!error}
          />
          <FormControl sx={{ width: "100%", marginTop: "16px" }} margin="dense">
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={formData.role}
              onChange={handleChange}
              label="Role"
            >
              <MenuItem value="User">User</MenuItem>
              <MenuItem value="Administrator">Administrator</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "16px" }}
            margin="dense"
            helperText={selectedUser ? "Leave blank to keep current password" : ""}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "16px" }}
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {selectedUser ? "Update" : "Add User"}
          </Button>
        </DialogActions>
      </>
    </Dialog>
  );
}

export default AccountForm;
