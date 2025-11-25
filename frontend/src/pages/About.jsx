import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        About
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        About guide content goes here.
      </Typography>
    </Box>
  );
}