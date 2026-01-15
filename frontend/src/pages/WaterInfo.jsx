import {
  Box,
  Typography,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from "@mui/material";

export default function WaterInfo() {
  return (
    <Box sx={{ p: 3 }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Water Information
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          General details about the water’s condition, including quality,
          source, usage, and environmental factors.
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          Key Water Quality Parameters
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          Water quality is measured through three distinct "lenses": <strong>Physical, Chemical, and Biological</strong>.
        </Typography>

        <Box sx={{ ml: 2, mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2", mb: 2 }}>
            Physical Indicators (The Aesthetics)
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            <strong>Turbidity:</strong> Measures how "cloudy" the water is. High turbidity can protect bacteria from disinfection processes.
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            <strong>Conductivity:</strong> Measures the water's ability to conduct electricity, which indicates the level of Total Dissolved Solids (TDS). High TDS often results in a salty or bitter taste.
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            <strong>pH Level:</strong> Ideally between 6.5 and 8.5. Water that is too acidic (below 6.5) can corrode metal pipes, leaching lead or copper into your drink.
          </Typography>
        </Box>

        <Box sx={{ ml: 2, mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f57c00", mb: 2 }}>
            Chemical Indicators (The Invisible Risks)
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            <strong>Nitrates/Nitrites:</strong> Often from fertilizer runoff. High levels are dangerous for infants (Blue Baby Syndrome).
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            <strong>Hardness:</strong> Primarily calcium and magnesium. While not a health risk, "hard" water causes scale buildup in pipes and affects soap lathering.
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            <strong>PFAS ("Forever Chemicals"):</strong> Modern standards now strictly limit these, as they accumulate in the body and are linked to various health issues.
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            <strong>Residual Chlorine:</strong> Indicates that the water has been treated to kill germs. A slight smell is normal and usually means the water is protected from bacteria.
          </Typography>
        </Box>

        <Box sx={{ ml: 2, mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#d32f2f", mb: 2 }}>
            Biological Indicators (The Immediate Threats)
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            <strong>Coliform Bacteria & E. coli:</strong> Their presence indicates that the water has been contaminated by human or animal waste. Safe drinking water should contain zero coliforms.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          How to Check Your Water Quality
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
          You have three main options depending on your level of concern and your water source:
        </Typography>
        
        <Box sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            How to Check Your Water Quality You have three main options depending
            on your level of concern and your water source:
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Method</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Best For</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Pros/Cons</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Consumer Confidence Report (CCR)</TableCell>
                  <TableCell>City/Tap Water users</TableCell>
                  <TableCell>
                    Free. Provided annually by your utility company. It lists
                    all detected contaminants and their levels compared to legal
                    limits.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>At-Home Test Kits</TableCell>
                  <TableCell>General screening</TableCell>
                  <TableCell>
                    Fast & Cheap. Uses color-changing strips for pH, lead,
                    chlorine, and nitrates. Good for a "quick check" but less
                    precise.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Certified Lab Testing</TableCell>
                  <TableCell>Well water or health concerns</TableCell>
                  <TableCell>
                    Most Accurate. Required if you have a private well (which
                    isn't regulated by the city). Labs can test for 200+
                    specific chemicals.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          2026 Regulatory Update
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, color: "text.secondary" }}
        >
          As of January 2026, many regions have implemented the following mandatory limits for "Micropollutants":
          <br />
          PFAS: Limits are now set as low as 0.10 μg/L for a sum of 20 specific PFAS compounds.
          <br />  
          Uranium: A new focus on natural radioactive materials, with limits often around 30 μg/L.  
          <br />
          Bisphenol A: Now monitored with a parametric value of 2.5 μg/L.  
          <br />
          Pro Tip: If you use a private well, health experts recommend testing for bacteria and nitrates every year, and for lead, arsenic, and VOCs every 3 to 5 years.
        </Typography>
      </Box>
    </Box>
  );
}
