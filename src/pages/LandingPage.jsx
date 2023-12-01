import Container from "../components/Container";
import { Box, Typography, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import CaevasCard from "../components/CaevasCard";

function LandingPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        sx={{
          width: "90vw",
          display: "flex",
          height: "6vh",
          border: `4px solid ${theme.palette.text.primary}`,
          borderRadius: "10px",
          mt: 5,
          cursor: "pointer",
        }}
        onClick={() => navigate("/search")}
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
          <SearchIcon
            sx={{
              color: theme.palette.background.default,
              width: "90%",
              height: "90%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ ml: 2 }}>
            Search...
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "90vw",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">Recently Viewed</Typography>
        <Box
          sx={{
            width: "90vw",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            mt: 2,
          }}
        >
          <CaevasCard
            title="COMP_SCI 211"
            description="Class Page"
            colorVariant="red"
            navTo="/canvas"
          />
          <CaevasCard
            title="CTECs"
            description="COMP_SCI"
            colorVariant="yellow"
            navTo="/ctecs"
          />
          <CaevasCard
            title="TUITION"
            description="Balance Due"
            colorVariant="green"
            navTo=""
          />
        </Box>
      </Box>
    </Container>
  );
}
export default LandingPage;
