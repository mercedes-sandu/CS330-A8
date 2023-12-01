import Container from "../components/Container";
import { Box, Typography, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function LandingPage() {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          width: "80vw",
          display: "flex",
          height: "6vh",
          border: `4px solid ${theme.palette.text.primary}`,
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            width: "6vh",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.palette.primary[8],
          }}
        >
          <SearchIcon sx={{ color: theme.palette.background.default }} />
        </Box>
        <Box>
          <Typography variant="h4">Search...</Typography>
        </Box>
      </Box>
    </Container>
  );
}
export default LandingPage;
