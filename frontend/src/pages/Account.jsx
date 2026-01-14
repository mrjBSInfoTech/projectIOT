import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  InputAdornment,
  LinearProgress,
  Menu,
  MenuItem,
  Paper,
  Select,
  Slide,
  Snackbar,
  Stack,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TextField,
  Tooltip,
  IconButton,
  Typography,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  fetchAllUsers,
  fetchUserById,
  addUser,
  editUser,
  deleteUser,
} from "../api/userAPI";
import AccountForm from "../components/Account/AccountForm";
import AccountDelete from "../components/Account/AccountDelete";

import axios from "axios";

export default function Account() {
  const [users, setUsers] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [menuUser, setMenuUser] = useState(null);
  const openMenu = Boolean(menuAnchorEl);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("aToZ");
  const [roleOption, setRoleOption] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };
  const handleMenuOpen = (event, user) => {
    setMenuAnchorEl(event.currentTarget);
    setMenuUser(user);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setMenuUser(null);
  };
  const loadUsers = async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const response = await fetchAllUsers();
      if (response && Array.isArray(response.data)) {
        setUsers(response.data);
      } else if (Array.isArray(response)) {
        setUsers(response);
      } else {
        setUsers([]);
        setErrorMessage("⚠️ No data received from server.");
      }
    } catch (err) {
      console.error("Failed to fetch data:", err);
      setUsers([]);
      setErrorMessage(
        err.message || "⚠️ Failed to fetch users data. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadUsers();
  }, []);

  // ➕ Open Add Modal
  const handleOpenAdd = () => {
    setSelectedUser(null);
    setOpenForm(true);
  };

  // ✏️ Open Edit Modal
  const handleOpenEdit = (user) => {
    setSelectedUser(user);
    setOpenForm(true);
  };

  // 🗑️ Open Delete Modal
  const handleOpenDelete = (user) => {
    setSelectedUser(user);
    setOpenDelete(true);
  };

  // 💾 Submit (Add or Edit)
  const handleSubmit = async (formData) => {
    try {
      if (selectedUser) {
        await editUser(selectedUser.id, formData);
        showSnackbar("✓ Editing Complete");
      } else {
        await addUser(formData);
        showSnackbar("✓ Adding Complete");
      }
      await loadUsers();
      setOpenForm(false);
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  // 🗑️ Submit (Delete)
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      await loadUsers();
      setOpenDelete(false);
      showSnackbar("✓ Deletion Complete");
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  // 🔍 Filter and Sort Users
  const filteredUsers = users
    .filter((user) => {
      const matchesSearch = user.username.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = roleOption === "" || user.role?.toLowerCase() === roleOption.toLowerCase();
      return matchesSearch && matchesRole;
    })
    .sort((a, b) => {
      if (sortOption === "aToZ") {
        return a.username.localeCompare(b.username);
      } else if (sortOption === "zToA") {
        return b.username.localeCompare(a.username);
      }
      return 0;
    });
  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Account
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Please enter an account
          </Typography>
        </Box>
        <Button
          variant="outlined"
          onClick={handleOpenAdd}
          sx={{
            width: { xs: 150, sm: 150 },
            height: { xs: 45, sm: 45 },
            minWidth: { xs: 45, sm: 50 },
            fontSize: { xs: 12, sm: 16 },
            padding: 0,
          }}
        >
          Add User
        </Button>
      </Box>

      {/* Filter Placeholder */}
      <Paper sx={{ p: 3, mt: 3, borderRadius: 2 }} variant="outlined">
        <Typography variant="h6">Filter</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "stretch", sm: "center" },
            gap: 2,
            mb: 2,
            mt: 2,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search user..."
            size="small"
            sx={{ width: { xs: "100%", sm: 250 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              width: { xs: "100%", md: "auto" },
            }}
          >
            <FormControl size="small" sx={{ width: { xs: "100%", sm: 180 } }}>
              <InputLabel>Sort by Name</InputLabel>
              <Select
                label="Sort by Name"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <MenuItem value="aToZ">A - Z</MenuItem>
                <MenuItem value="zToA">Z - A</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ width: { xs: "100%", sm: 180 } }}>
              <InputLabel>Sort by Role</InputLabel>
              <Select
                label="Sort by Role"
                value={roleOption}
                onChange={(e) => setRoleOption(e.target.value)}
              >
                <MenuItem value="">All Roles</MenuItem>
                <MenuItem value="Administrator">Administrator</MenuItem>
                <MenuItem value="User">User</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Paper>

      {/* User Cards Grid */}
      <Paper sx={{ p: 3, mt: 3, borderRadius: 2 }} variant="outlined">
        {errorMessage ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : filteredUsers.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {filteredUsers.map((user) => (
              <Card
                key={user.id}
                sx={{
                  maxWidth: 300,
                  height: "100%",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: (theme) => theme.shadows[4],
                  },
                }}
              >
                {/* 👤 User Avatar Area */}
                <Box
                  sx={{
                    width: "100%",
                    height: 200,
                    position: "relative",
                    backgroundColor: "#f5f5f5",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: "white",
                      opacity: 0.3,
                      fontSize: "100px",
                      fontWeight: "bold",
                    }}
                  >
                    {user.username.charAt(0).toUpperCase()}
                  </Typography>
                </Box>

                {/* 🧾 User Details */}
                <CardContent sx={{ flex: 1, overflow: "auto" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ flex: 1, mr: 1, fontWeight: "bold" }}
                    >
                      {user.username}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={(e) => handleMenuOpen(e, user)}
                      sx={{
                        ml: "auto",
                        "&:hover": {
                          backgroundColor: "action.hover",
                        },
                      }}
                    >
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography variant="body2" color="text.secondary">
                    Role: {user.role}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          <Typography align="center">No users found.</Typography>
        )}
      </Paper>
      <Menu
        anchorEl={menuAnchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem
          onClick={() => {
            handleOpenEdit(menuUser);
            handleMenuClose();
          }}
        >
          <Edit fontSize="small" sx={{ mr: 1 }} />
          Edit
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleOpenDelete(menuUser);
            handleMenuClose();
          }}
          sx={{ color: "error.main" }}
        >
          <Delete fontSize="small" sx={{ mr: 1 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* Add/Edit User Modal */}
      <AccountForm
        open={openForm}
        handleClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
        selectedUser={selectedUser}
      />
      {/* Delete User Modal */}
      <AccountDelete
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        onSubmit={handleDelete}
        selectedUser={selectedUser}
      />

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
