import { Box } from "@mui/material";

function Container({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        height: "70vh",
        pb: 10,
      }}
    >
      {children}
    </Box>
  );
}

export default Container;
