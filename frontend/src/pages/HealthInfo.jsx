import { Box, Typography } from "@mui/material";

export default function HealthInfo() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Health Information
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Refers to data related to water safety and its impact on human health, such as contamination risks or exposure effects.
      </Typography>
    </Box>
  );
}