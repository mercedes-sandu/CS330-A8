import { Box, Typography, useTheme } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function Header({ loggedIn }) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        position: "fixed",
        top: 0,
        left: 0,
        height: "16vh",
        width: "calc(100% - 100px)",
        borderBottomLeftRadius: "50px",
        pl: 5,
        pr: 5,
        border: `10px solid ${theme.palette.text.primary}`,
        filter: "drop-shadow(6px 12px rgba(0, 0, 0, 1))",
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h1">Caevas</Typography>
        {loggedIn && (
          <Typography variant="h4" sx={{ ml: 1 }}>
            Welcome back, John Doe!
          </Typography>
        )}
      </Box>
      {loggedIn && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.default,
              width: "9vh",
              height: "9vh",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              outline: `10px solid ${theme.palette.text.primary}`,
              filter: "drop-shadow(3px 6px rgba(0, 0, 0, 1))",
              ml: 5,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => navigate(-1)}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.background.default,
                outline: `3px solid ${theme.palette.text.primary}`,
                width: "7vh",
                height: "7vh",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowBackIcon
                sx={{
                  color: theme.palette.text.primary,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: theme.palette.background.default,
              width: "9vh",
              height: "9vh",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              outline: `10px solid ${theme.palette.text.primary}`,
              filter: "drop-shadow(3px 6px rgba(0, 0, 0, 1))",
              ml: 5,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/help")}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.background.default,
                outline: `3px solid ${theme.palette.text.primary}`,
                width: "7vh",
                height: "7vh",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <QuestionMarkIcon
                sx={{
                  color: theme.palette.text.primary,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: theme.palette.background.default,
              width: "9vh",
              height: "9vh",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              outline: `10px solid ${theme.palette.text.primary}`,
              filter: "drop-shadow(3px 6px rgba(0, 0, 0, 1))",
              ml: 5,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/home")}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.background.default,
                outline: `3px solid ${theme.palette.text.primary}`,
                width: "7vh",
                height: "7vh",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HomeIcon
                sx={{
                  color: theme.palette.text.primary,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: theme.palette.primary[8],
              width: "8vh",
              height: "8vh",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              outline: `10px solid ${theme.palette.text.primary}`,
              border: `5px solid ${theme.palette.background.default}`,
              filter: "drop-shadow(3px 6px rgba(0, 0, 0, 1))",
              ml: 5,
            }}
          >
            <PersonOutlineIcon
              sx={{
                color: theme.palette.background.default,
                width: "85%",
                height: "85%",
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Header;
