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
  Typography,
} from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

// Icons
import ShowChartIcon from "@mui/icons-material/ShowChart";
import OpacityIcon from "@mui/icons-material/Opacity";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import TimelineIcon from '@mui/icons-material/Timeline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Dashboard() {
  const cards = [
    {
      title: "PH LEVEL",
      value: "7.2",
      status: "Good",
      color: "#EAFBF0",
      icon: <ShowChartIcon sx={{ color: "#22C55E" }} />,
    },
    {
      title: "TURBIDITY",
      value: "1.5",
      unit: "NTU",
      status: "Good",
      color: "#EAFBF0",
      icon: <OpacityIcon sx={{ color: "#22C55E" }} />,
    },
    {
      title: "TEMPERATURE",
      value: "24",
      unit: "°C",
      status: "Good",
      color: "#EAFBF0",
      icon: <DeviceThermostatIcon sx={{ color: "#22C55E" }} />,
    },
    {
      title: "CONDUCTIVITY",
      value: "450",
      unit: "µS",
      status: "Warning",
      color: "#FFF7E6",
      icon: <ElectricBoltIcon sx={{ color: "#F59E0B" }} />,
    },
  ];
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
            Real-time Overview
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Live monitoring from Station A-1
          </Typography>
        </Box>
        <Button variant="outlined" sx={{borderRadius:2}}>Export Data</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 3,
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 240px",
              maxWidth: 307,
              borderRadius: 3,
              backgroundColor: card.color,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <CardContent>
              {/* Header */}
              <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#6B7280",
                  }}
                >
                  {card.title}
                </Typography>

                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </Box>
              </Stack>

              {/* Value */}
              <Typography fontSize={32} fontWeight="bold" sx={{color:"black"}}>
                {card.value}
                <Typography component="span" fontSize={14} ml={0.5}>
                  {card.unit}
                </Typography>
              </Typography>

              {/* Footer */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
                <Chip
                  label={card.status}
                  size="small"
                  color={card.status === "Good" ? "success" : "warning"}
                  variant="outlined"
                />
                <Typography fontSize={12} color="gray">
                  Just now
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
      {/* IOT Info */}
      <Box
  sx={{
    display: "flex",
    gap: 3,
    flexWrap: "wrap",
    justifyContent: "center",
    mt: 3,
    flexDirection: { xs: "column", md: "row" },
  }}
>
  <Paper
    sx={{
      p: { xs: 2, md: 3 },
      mt: 3,
      borderRadius: 5,
      height: { xs: 400, md: 500 },
      minHeight: { xs: 380, md: 500 },
      width: { xs: "100%", md: "65%" },
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        mb: 2,
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, md: 0 },
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: "bold", 
          mb: { xs: 1, md: 2 },
          fontSize: { xs: "1.1rem", md: "1.25rem" }
        }}
      >
        Water Quality Trends
      </Typography>
      <FormControl 
        size="small" 
        sx={{ 
          width: { xs: "100%", sm: 290, lg: 180 },
          mt: { xs: 1, md: 0 }
        }}
      >
        <InputLabel>Sort</InputLabel>
        <Select label="Sort">
          <MenuItem value="thism">This Month</MenuItem>
          <MenuItem value="this7w">This Week</MenuItem>
          <MenuItem value="last24h">Last 24 Hours</MenuItem>
        </Select>
      </FormControl>
    </Box>
    {/* Add your chart/content here */}
    <Box sx={{ 
      height: { xs: 300, md: 400 }, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      bgcolor: "background.paper",
      borderRadius: 3,
      p: 2
    }}>
      <Typography color="text.secondary">
        Chart/Graph Area
      </Typography>
    </Box>
  </Paper>
  
  <Paper
    sx={{
      p: { xs: 2, md: 3 },
      mt: { xs: 0, md: 3 },
      borderRadius: 5,
      height: { xs: "auto", md: 500 },
      minHeight: { xs: 350, md: 500 },
      width: { xs: "100%", md: "31%" },
      bgcolor: "indigo",
    }}
  >
    <Typography 
      variant="h6" 
      sx={{ 
        fontWeight: "bold", 
        mb: 3, 
        color: "white",
        fontSize: { xs: "1.1rem", md: "1.25rem" }
      }}
    >
      System Status
    </Typography>
    
    {/* First status item */}
    <Box sx={{ 
      display: "flex", 
      gap: 2, 
      alignItems: "flex-start", 
      mb: 3,
      flexDirection: { xs: "row", sm: "row" }
    }}>
      <Paper
        sx={{
          p: { xs: 1, md: 1.5 },
          bgcolor: "gray",
          color: "white",
          borderRadius: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: { xs: 45, md: 50 },
          height: { xs: 45, md: 50 },
          fontWeight: "bold",
          fontSize: { xs: 18, md: 20 },
          flexShrink: 0,
        }}
      >
        <TimelineIcon fontSize={window.innerWidth < 600 ? "small" : "medium"} />
      </Paper>
      <Box sx={{ flex: 1 }}>
        <Typography 
          sx={{ 
            fontWeight: "bold", 
            color: "violet",
            fontSize: { xs: "0.95rem", md: "1rem" }
          }}
        >
          Filteration System
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: "bold", 
            color: "white",
            fontSize: { xs: "0.85rem", md: "0.875rem" }
          }}
        >
          Active & Clean
        </Typography>
      </Box>
    </Box>
    
    {/* Second status item */}
    <Box sx={{ 
      display: "flex", 
      gap: 2, 
      alignItems: "flex-start", 
      mb: 3,
      flexDirection: { xs: "row", sm: "row" }
    }}>
      <Paper
        sx={{
          p: { xs: 1, md: 1.5 },
          bgcolor: "gray",
          color: "white",
          borderRadius: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: { xs: 45, md: 50 },
          height: { xs: 45, md: 50 },
          fontWeight: "bold",
          fontSize: { xs: 18, md: 20 },
          flexShrink: 0,
        }}
      >
        <AccessTimeIcon fontSize={window.innerWidth < 600 ? "small" : "medium"} />
      </Paper>
      <Box sx={{ flex: 1 }}>
        <Typography 
          sx={{ 
            fontWeight: "bold", 
            color: "violet",
            fontSize: { xs: "0.95rem", md: "1rem" }
          }}
        >
          Sensor Network
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: "bold", 
            color: "white",
            fontSize: { xs: "0.85rem", md: "0.875rem" }
          }}
        >
          Operational
        </Typography>
      </Box>
    </Box>
    
    <Divider sx={{ 
      border: 1, 
      mt: 3, 
      mb: 3, 
      color: '#EAEAEA',
      opacity: 0.3 
    }} />
    
    <Typography 
      sx={{ 
        fontWeight: "bold", 
        color: "violet",
        fontSize: { xs: "1rem", md: "1.1rem" },
        mb: 2
      }}
    >
      Filter Health
    </Typography>
    
    {/* Filter Health Visualization */}
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column",
      gap: 2,
      mb: 2
    }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography 
          variant="body2" 
          sx={{ 
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: { xs: "0.8rem", md: "0.875rem" }
          }}
        >
          Efficiency
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: "bold", 
            color: "white",
            fontSize: { xs: "0.8rem", md: "0.875rem" }
          }}
        >
          92%
        </Typography>
      </Box>
      <Box sx={{ 
        width: "100%", 
        height: 8, 
        bgcolor: "rgba(255, 255, 255, 0.1)", 
        borderRadius: 4,
        overflow: "hidden"
      }}>
        <Box sx={{ 
          width: "92%", 
          height: "100%", 
          bgcolor: "violet",
          borderRadius: 4
        }} />
      </Box>
    </Box>
    
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column",
      gap: 2
    }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography 
          variant="body2" 
          sx={{ 
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: { xs: "0.8rem", md: "0.875rem" }
          }}
        >
          Last Maintenance
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: "bold", 
            color: "white",
            fontSize: { xs: "0.8rem", md: "0.875rem" }
          }}
        >
          15 days ago
        </Typography>
      </Box>
    </Box>
  </Paper>
</Box>
    </Box>
  );
}
