import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";

function LoginPage({ setLoggedIn }) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        sx={{
          width: "40vw",
          height: "60vh",
          backgroundColor: theme.palette.primary[3],
          mt: "4vh",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "column",
          border: `10px solid ${theme.palette.text.primary}`,
          filter: "drop-shadow(6px 12px rgba(0, 0, 0, 1))",
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary[2],
            width: "100%",
            height: "10vh",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            borderBottom: `10px solid ${theme.palette.text.primary}`,
          }}
        >
          <Typography variant="h2" sx={{ ml: 4 }}>
            Login
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <TextField
            label="netID"
            variant="filled"
            sx={{
              width: "80%",
              "& .MuiInputLabel-root": {
                color: theme.palette.text.primary,
                fontSize: "1.2rem",
              },
              "& .MuiFilledInput-input": {
                border: `4px solid ${theme.palette.text.primary}`,
                borderRadius: "10px",
                backgroundColor: theme.palette.background.default,
              },
            }}
            InputProps={{ disableUnderline: true }}
          />
          <TextField
            label="password"
            variant="filled"
            type="password"
            sx={{
              width: "80%",
              "& .MuiInputLabel-root": {
                color: theme.palette.text.primary,
                fontSize: "1.2rem",
              },
              "& .MuiFilledInput-input": {
                border: `4px solid ${theme.palette.text.primary}`,
                borderRadius: "10px",
                backgroundColor: theme.palette.background.default,
              },
            }}
            InputProps={{ disableUnderline: true }}
          />
          <Button
            variant="contained"
            disableElevation={true}
            sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                pl: 5,
                pr: 5,
                borderRadius: "10px",
                border: `4px solid ${theme.palette.text.primary}`,
                filter: "drop-shadow(3px 6px rgba(0, 0, 0, 1))",
                "&:hover": {
                    backgroundColor: theme.palette.background.secondary,
                },
            }}
            onClick={() => {
              setLoggedIn(true);
              navigate("/landing");
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
