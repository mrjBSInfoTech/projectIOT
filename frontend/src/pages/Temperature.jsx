import { Box, Typography, Divider } from "@mui/material";

export default function Temperature() {
  return (
    <Box sx={{ p: 3 }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Temperature
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Indicates how hot or cold the water is, which affects water quality
          and aquatic life.
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Why it Matters */}
      <Box sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Why pH Level Matters?
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, color: "text.secondary" }}
        >
          Water temperature strongly affects water quality and the organisms
          that live in it. Warmer water holds less dissolved oxygen, which is
          essential for fish and other aquatic animals to breathe. Low oxygen
          levels can lead to fish stress, illness, or death. Increased
          temperatures also speed up chemical reactions in water, which can
          worsen pollution and increase the spread of harmful bacteria and algae
          blooms.
        </Typography>
        <br />
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, color: "text.secondary" }}
        >
          Sudden temperature changes, often caused by industrial discharge,
          deforestation, or climate change, can shock aquatic organisms and
          disrupt ecosystems. Temperature also affects the accuracy of other
          water quality measurements, such as pH and conductivity, making it an
          important parameter to monitor alongside other factors.
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
          Elevated water temperatures can promote the spread of bacteria and
          reduce water freshness, making it less safe for human use. Low oxygen
          levels and bacterial growth can affect water taste, safety, and
          reliability. Monitoring water temperature helps ensure safe water
          conditions, protects aquatic life, and supports sustainable water
          resources for communities.
        </Typography>
      </Box>
    </Box>
  );
}
