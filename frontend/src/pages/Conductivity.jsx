import { Box, Typography } from "@mui/material";

export default function Conductivity() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Conductivity
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Shows how well water can conduct electricity, based on the amount of dissolved salts and minerals present.
      </Typography>
    </Box>
  );
}