import { Box, Typography, Paper, Divider } from "@mui/material";

export default function PHLevel() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          PH Level
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Measures how acidic or basic the water is on a scale of 0–14. A pH of
          7 is neutral.
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
          The pH level shows how acidic or basic water is on a scale from 0 to
          14. Most natural and drinking water should have a pH close to neutral
          (around 7). When water becomes too acidic or too alkaline, it can
          cause serious problems. Acidic water can irritate the skin, eyes, and
          stomach, especially when used for drinking or bathing. It can also
          corrode plumbing systems, allowing toxic metals such as lead or copper
          to dissolve into the water supply.
        </Typography>
        <br />
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, color: "text.secondary" }}
        >
          In addition, abnormal pH levels can reduce the effectiveness of water
          treatment processes such as chlorination and filtration. Extremely
          acidic or alkaline water may alter taste and odor, making the water
          unpleasant and unsafe for consumption. Sudden changes in pH may also
          indicate chemical pollution or industrial contamination.
        </Typography>
        <br />
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, color: "text.secondary" }}
        >
          For aquatic life, pH levels are especially important. Fish, insects,
          and plants can only survive within a narrow pH range. If the pH
          changes too much, it can stress or kill aquatic organisms and disrupt
          entire ecosystems. Maintaining a balanced pH helps ensure safe
          drinking water, protects infrastructure, and supports healthy rivers,
          lakes, and oceans.
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
          Water with unsafe pH levels can irritate the skin, eyes, and digestive
          system when used for drinking, cooking, or bathing. Long-term exposure
          to contaminated water may increase health risks, especially for
          children and the elderly. Monitoring pH helps protect human health,
          prevents infrastructure damage, and ensures that water is safe for
          daily use.
        </Typography>
      </Box>
    </Box>
  );
}
