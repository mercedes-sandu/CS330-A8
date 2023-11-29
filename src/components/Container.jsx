import { Box } from "@mui/material";

function Container({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "84vh",
      }}
    >
      {children}
    </Box>
  );
}

export default Container;
