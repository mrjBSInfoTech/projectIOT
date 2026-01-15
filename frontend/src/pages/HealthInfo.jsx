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

export default function HealthInfo() {
  return (
    <Box sx={{ p: 3 }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Health Information
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Refers to data related to water safety and its impact on human health,
          such as contamination risks or exposure effects.
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          What defines safe water?
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, color: "text.secondary" }}
        >
          Safe water is water that does not pose any significant risk to health
          over a lifetime of consumption. According to the World Health
          Organization (WHO), safe water must be: Free from pathogens: No
          harmful bacteria, viruses, or parasites. Chemically safe: Levels of
          chemicals (like arsenic, fluoride, or lead) must be within strict
          safety limits. Clear and Odorless: While "clear" doesn't always mean
          "safe," safe water is generally free of cloudiness or strong
          chemical/organic smells. Identifying Unsafe Water: Red Flags You
          cannot always see, smell, or taste the most dangerous contaminants
          (like bacteria or lead), but these sensory signs are immediate
          warnings:
        </Typography>
        <Box sx={{ p: 3, mb: 3 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Sign</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Possible Cause
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Potential Risk
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Cloudy or Foamy</TableCell>
                  <TableCell>Silt, clay, or high mineral content</TableCell>
                  <TableCell>
                    May harbor bacteria or indicate poor filtration.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rotten Egg Smell</TableCell>
                  <TableCell>Hydrogen sulfide gas</TableCell>
                  <TableCell>
                    Often naturally occurring but can indicate bacterial growth.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Metallic Taste</TableCell>
                  <TableCell>Lead, iron, copper, or low pH</TableCell>
                  <TableCell>
                    High lead levels can cause developmental issues in children.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Orange/Brown Color</TableCell>
                  <TableCell>Iron, manganese, or rusty pipes</TableCell>
                  <TableCell>
                    Can stain fixtures and indicate aging infrastructure.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Chlorine Smell</TableCell>
                  <TableCell>Excessive disinfection</TableCell>
                  <TableCell>
                    While used to kill germs, very high levels can be
                    irritating.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            Health Risks of Contaminated Water
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
            Unsafe water can lead to two types of health issues: <strong>acute (immediate)</strong> and <strong>chronic (long-term)</strong>.
          </Typography>

          <Box sx={{ ml: 2, mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#d32f2f", mb: 2 }}>
              1. Waterborne Diseases (Acute)
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Caused by microorganisms (bacteria, viruses, and parasites), these often lead to gastrointestinal distress:
            </Typography>
            <Box sx={{ ml: 2, mb: 2 }}>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                <strong>Bacteria:</strong> Cholera, Typhoid, and E. coli infections.
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                <strong>Viruses:</strong> Hepatitis A, Norovirus, and Polio.
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                <strong>Parasites:</strong> Giardia and Cryptosporidium (which are often resistant to chlorine).
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong>Symptoms:</strong> Diarrhea, vomiting, stomach cramps, and fever.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ ml: 2, mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f57c00", mb: 2 }}>
              2. Chemical Exposure (Chronic)
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Long-term exposure to certain chemicals in water can lead to serious health conditions:
            </Typography>
            <Box sx={{ ml: 2, mb: 2 }}>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                <strong>Lead:</strong> Can cause brain damage and kidney issues, especially in children and pregnant women.
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                <strong>Arsenic:</strong> Linked to skin lesions and various cancers (lung, bladder, kidney).
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong>Nitrates:</strong> Particularly dangerous for infants, as they can interfere with oxygen transport in the blood ("Blue Baby Syndrome").
              </Typography>
            </Box>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            How to Make Water Safe
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
            If you suspect your water is unsafe, use these CDC-recommended methods to treat it at home:
          </Typography>
          <Box sx={{ ml: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Boiling
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Bring water to a rolling boil for 1 minute (3 minutes at high altitudes). This is the most effective way to kill germs.
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Disinfection
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Use unscented household bleach (about 8 drops per gallon) if boiling isn't possible. Note: This does not remove chemicals.
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Filtration
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Use filters certified by NSF International to remove specific contaminants like lead or parasites.
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Distillation
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Involves boiling water and collecting the steam. This removes both germs and many chemicals (like heavy metals).
              </Typography>
            </Box>
          </Box>
      </Box>
    </Box>
  );
}
