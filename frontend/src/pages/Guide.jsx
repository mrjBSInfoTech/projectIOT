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
} from "@mui/material";

export default function Guide() {
  return (
    <Box sx={{ p: 3 }}>
      <Box>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Guide
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            flex: "1 1 250px",
            maxWidth: 350,
            height: 200,
            padding: 2,
            borderRadius: 2,
            border: "1px solid",
            bgcolor: "error.main",
            color: "white",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: (theme) => theme.shadows[1],
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
              PH Level
            </Typography>
          </CardContent>
        </Card>

        <Card
          variant="outlined"
          sx={{
            flex: "1 1 250px",
            maxWidth: 350,
            height: 200,
            padding: 2,
            borderRadius: 2,
            border: "1px solid",
            bgcolor: "success.main",
            color: "white",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: (theme) => theme.shadows[1],
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
              Temperature
            </Typography>
          </CardContent>
        </Card>

        <Card
          variant="outlined"
          sx={{
            flex: "1 1 250px",
            maxWidth: 350,
            height: 200,
            padding: 2,
            borderRadius: 2,
            border: "1px solid",
            bgcolor: "secondary.main",
            color: "white",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: (theme) => theme.shadows[1],
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
              Conductivity
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            flex: "1 1 250px",
            maxWidth: 350,
            height: 200,
            padding: 2,
            borderRadius: 2,
            border: "1px solid",
            bgcolor: "primary.main",
            color: "white",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: (theme) => theme.shadows[1],
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
              Turbidity
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Paper
        sx={{
          p: 3,
          mt: 3,
          borderRadius: 2,
          border: "1px solid",
          bgcolor: "success.light",
          color: "white",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: (theme) => theme.shadows[1],
          },
        }}
        variant="outlined"
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Health Information
        </Typography>
      </Paper>
      <Paper
        sx={{
          p: 3,
          mt: 3,
          borderRadius: 2,
          border: "1px solid",
          bgcolor: "success.light",
          color: "white",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: (theme) => theme.shadows[1],
          },
        }}
        variant="outlined"
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Water Information
        </Typography>
      </Paper>
      <Box
        sx={{ mt: 3, textAlign: { xs: "center", sm: "right", md: "right" } }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: { xs: "100%", md: 150 },
            fontSize: "1.1rem",
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          Start
        </Button>
      </Box>
    </Box>
  );
}
