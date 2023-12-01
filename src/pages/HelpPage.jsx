import Container from "../components/Container";
import HelpCard from "../components/HelpCard";
import { Box, Typography } from "@mui/material";

function HelpPage() {
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{ alignSelf: "flex-start", ml: 5, mt: "5vh" }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ pb: "5vh", }}>
        <HelpCard
          question="How do I see all possible pages?"
          answer="Press the home button at the top right of the screen."
          colorVariant="red"
        />
        <HelpCard
          question="Where do I access my classes on Canvas?"
          answer={'Press the home button and then select the "Canvas" card.'}
          colorVariant="yellow"
        />
        <HelpCard
          question="How do I change my personal information?"
          answer="Press your profile image at the top right of the screen and change the information of interest."
          colorVariant="green"
        />
      </Box>
    </Container>
  );
}

export default HelpPage;
