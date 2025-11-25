import { Box, Typography } from "@mui/material";

export default function WaterInfo() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Water Information
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        General details about the water’s condition, including quality, source, usage, and environmental factors.
      </Typography>
    </Box>
  );
}