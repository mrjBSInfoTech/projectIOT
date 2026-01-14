import { Box, Typography, Divider } from "@mui/material";

export default function Turbidity() {
  return (
    <Box sx={{ p: 3 }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Turbidity
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Measures how cloudy or clear the water is. High turbidity means more
          suspended particles like dirt or microbes.
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Why it Matters */}
      <Box sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Why turbidity Matters?
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, color: "text.secondary" }}
        >
          Turbidity refers to how clear or cloudy water is due to suspended
          particles like dirt, algae, bacteria, or waste. High turbidity makes
          water look murky and can be a sign of pollution. These particles can
          carry harmful microorganisms, chemicals, and pathogens that cause
          disease, making the water unsafe to drink or use.
        </Typography>
        <br />
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, color: "text.secondary" }}
        >
          High turbidity also makes water treatment more difficult and expensive
          because the particles can protect bacteria from disinfection.
          Sediments may clog filters and reduce the efficiency of filtration
          systems. In natural water bodies, cloudy water blocks sunlight,
          preventing aquatic plants from photosynthesizing properly. This
          reduces oxygen production, negatively affecting fish and other aquatic
          organisms.
        </Typography>
        <br />
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, color: "text.secondary" }}
        >
          Turbidity can increase after heavy rainfall, flooding, agricultural
          runoff, or improper waste disposal. Continuous monitoring allows early
          detection of these conditions and prevents contaminated water from
          being consumed.
        </Typography>
      </Box>

      {/* Why People Should Care */}
      <Box sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Why People Should Care?
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, color: "text.secondary" }}
        >
          High turbidity increases the risk of waterborne diseases such as
          diarrhea, cholera, and other infections. Cloudy water is unsafe for
          drinking, bathing, and recreational activities. Clear water improves
          public health, supports safe water treatment, and reduces exposure to
          harmful pathogens, helping communities maintain better overall health.
        </Typography>
      </Box>
    </Box>
  );
}
