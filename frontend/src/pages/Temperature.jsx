import { Box, Typography } from "@mui/material";

export default function Temperature() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Temperature
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Indicates how hot or cold the water is, which affects water quality and aquatic life.
      </Typography>
    </Box>
  );
}