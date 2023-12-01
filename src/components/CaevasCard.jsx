import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CaevasCard({ title, description, colorVariant, navTo }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const colorVariantToColors = {
    red: [theme.palette.primary[4], theme.palette.primary[5]],
    yellow: [theme.palette.primary[6], theme.palette.primary[7]],
    green: [theme.palette.primary[2], theme.palette.primary[3]],
    blue: [theme.palette.primary.main, theme.palette.primary[1]],
    purple: [theme.palette.primary[8], theme.palette.primary[9]],
  };

  return (
    <Box
      sx={{
        width: "15vw",
        height: "17vw",
        backgroundColor: colorVariantToColors[colorVariant][1],
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        border: `10px solid ${theme.palette.text.primary}`,
        filter: "drop-shadow(6px 12px rgba(0, 0, 0, 1))",
        cursor: navTo === "" ? "default" : "pointer",
      }}
      onClick={() => navigate(navTo)}
    >
      <Box
        sx={{
          backgroundColor: colorVariantToColors[colorVariant][0],
          width: "100%",
          height: "27%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderTopLeftRadius: "18px",
          borderTopRightRadius: "18px",
          borderBottom: `10px solid ${theme.palette.text.primary}`,
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: "73%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: 2,
          pr: 2,
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="h4">{description}</Typography>
      </Box>
    </Box>
  );
}

export default CaevasCard;
