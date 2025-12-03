import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  useTheme,
} from "@mui/material";

export default function Guide() {
  const theme = useTheme();
  return (
    <Box sx={{ p: 3 }}>
      <Box>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          User Guide
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            flex: "1 1 1000px",
            maxWidth: 1200,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: (theme) => theme.shadows[2],
            },
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Paper
              sx={{
                p: 1.5,
                bgcolor:"secondary.main",
                color: "indigo",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 50,
                height: 50,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              1
            </Paper>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Installation
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Connect the sensor probe to the main unit and submerge in water source.
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            flex: "1 1 1000px",
            maxWidth: 1200,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: (theme) => theme.shadows[2],
            },
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Paper
              sx={{
                p: 1.5,
                bgcolor:"secondary.main",
                color: "indigo",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 50,
                height: 50,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              2
            </Paper>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Calibration
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Use the calibration button to zero the sensors before first use.
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            flex: "1 1 1000px",
            maxWidth: 1200,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: (theme) => theme.shadows[2],
            },
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Paper
              sx={{
                p: 1.5,
                bgcolor:"secondary.main",
                color: "indigo",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 50,
                height: 50,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              3
            </Paper>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Monitoring
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Watch real-time data on the dashboard. Green indicators mean safe levels.
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            flex: "1 1 1000px",
            maxWidth: 1200,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: (theme) => theme.shadows[2],
            },
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Paper
              sx={{
                p: 1.5,
                bgcolor:"secondary.main",
                color: "indigo",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 50,
                height: 50,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              4
            </Paper>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Filtration
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                The system automatically engages filters when turbidity exceeds 2.0 NTU.
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
