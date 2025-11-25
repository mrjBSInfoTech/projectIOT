import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  LinearProgress,
  MenuItem,
  Paper,
  Select,
  Slide,
  Snackbar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TextField,
  Typography,
} from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

export default function Dashboard() {
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
            Dashboard
          </Typography>
        </Box>
      </Box>
      {/* IOT Info */}
      <Paper sx={{ p: 3, mt: 3, borderRadius: 2 ,height:500, border : '1px solid',}} variant="outlined">


      </Paper>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          mt: 3,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: { xs: "100%", md: 250 },
            fontSize: "1.1rem",
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          Health Info
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: { xs: "100%", md: 250 },
            fontSize: "1.1rem",
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          Water Info
        </Button>
      </Box>
    </Box>
  );
}