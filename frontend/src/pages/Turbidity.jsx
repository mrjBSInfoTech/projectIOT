import { Box, Typography } from "@mui/material";

export default function Turbidity() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Turbidity
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Measures how cloudy or clear the water is. High turbidity means more suspended particles like dirt or microbes.
      </Typography>
    </Box>
  );
}