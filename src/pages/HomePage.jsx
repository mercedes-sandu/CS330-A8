import Container from "../components/Container";
import CaevasCard from "../components/CaevasCard";
import { Box, Typography, useTheme } from "@mui/material";

function HomePage() {
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{ mt: "5vh", alignSelf: "flex-start", ml: 10 }}
      >
        Home
      </Typography>
      <Box
        sx={{
          width: "90vw",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          mt: "5vh",
        }}
      >
        <Box
          sx={{
            width: "90vw",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
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
            title="COURSES"
            description="Winter 2024"
            colorVariant="green"
            navTo=""
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "90vw",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          mt: "5vh",
          pb: "5vh",
        }}
      >
        <Box
          sx={{
            width: "90vw",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <CaevasCard
            title="DEGREE PROGRESS"
            description="COMP_SCI Major"
            colorVariant="blue"
            navTo=""
          />
          <CaevasCard
            title="PROFILE"
            description="Contacts"
            colorVariant="purple"
            navTo=""
          />
          <CaevasCard
            title="TUITION"
            description="Balance Due"
            colorVariant="red"
            navTo=""
          />
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
