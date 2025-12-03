import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function History() {
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
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Reading History
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            enableAccessibleFieldDOMStructure={false}
            slots={{ textField: TextField }}
            slotProps={{
              textField: {
                size: "small",
                fullWidth: true,
              },
            }}
            sx={{
              width: { xs: "100%", sm: 200 },
            }}
          />
        </LocalizationProvider>
      </Box>

      {/* History List */}
      <Paper
        sx={{ p: 3, mt: 3, borderRadius: 2, border: "1px solid" }}
        variant="outlined"
      >
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Date/Time</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>pH Level</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Turbidity</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Temperature (°C)
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Oct 21, 10:30 AM</TableCell>
                <TableCell>7.2</TableCell>
                <TableCell>0.5 NTU</TableCell>
                <TableCell>25.3</TableCell>
                <TableCell sx={{ color: "green", fontWeight: "bold" }}>
                  Good
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Oct 22, 11:00 AM</TableCell>
                <TableCell>7.1</TableCell>
                <TableCell>0.6 NTU</TableCell>
                <TableCell>25.8</TableCell>
                <TableCell sx={{ color: "green", fontWeight: "bold" }}>
                  Good
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Oct 23, 11:30 AM</TableCell>
                <TableCell>7.3</TableCell>
                <TableCell>1.2 NTU</TableCell>
                <TableCell>26.1</TableCell>
                <TableCell sx={{ color: "orange", fontWeight: "bold" }}>
                  Fair
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Oct 24, 12:00 PM</TableCell>
                <TableCell>6.9</TableCell>
                <TableCell>2.1 NTU</TableCell>
                <TableCell>26.5</TableCell>
                <TableCell sx={{ color: "orange", fontWeight: "bold" }}>
                  Fair
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Oct 25, 12:30 PM</TableCell>
                <TableCell>7.0</TableCell>
                <TableCell>0.8 NTU</TableCell>
                <TableCell>25.9</TableCell>
                <TableCell sx={{ color: "green", fontWeight: "bold" }}>
                  Good
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
