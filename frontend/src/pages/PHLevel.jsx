import { Box, Typography } from "@mui/material";

export default function PHLevel() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        PH Level
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Measures how acidic or basic the water is on a scale of 0–14. A pH of 7 is neutral.
      </Typography>
    </Box>
  );
}