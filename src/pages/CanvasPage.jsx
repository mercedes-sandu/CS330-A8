import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Container from "../components/Container";

function CanvasPage() {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          width: "80vw",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <List
            sx={{
              border: `10px solid ${theme.palette.text.primary}`,
              borderRadius: "30px",
              width: "100%",
              backgroundColor: theme.palette.primary[1],
            }}
          >
            <ListItem
              sx={{
                borderBottom: `10px solid ${theme.palette.text.primary}`,
              }}
            >
              <ListItemText>
                <Typography variant="h3" sx={{ padding: 1 }}>
                  Home
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                borderBottom: `10px solid ${theme.palette.text.primary}`,
                backgroundColor: theme.palette.background.default,
              }}
            >
              <ListItemText>
                <Typography variant="h3" sx={{ padding: 1 }}>
                  Assignments
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                borderBottom: `10px solid ${theme.palette.text.primary}`,
                backgroundColor: theme.palette.background.default,
              }}
            >
              <ListItemText>
                <Typography variant="h3" sx={{ padding: 1 }}>
                  Grades
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                borderBottom: `10px solid ${theme.palette.text.primary}`,
                backgroundColor: theme.palette.background.default,
              }}
            >
              <ListItemText>
                <Typography variant="h3" sx={{ padding: 1 }}>
                  People
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                borderBottom: `10px solid ${theme.palette.text.primary}`,
                backgroundColor: theme.palette.background.default,
              }}
            >
              <ListItemText>
                <Typography variant="h3" sx={{ padding: 1 }}>
                  Files
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                borderBottom: `10px solid ${theme.palette.text.primary}`,
                backgroundColor: theme.palette.background.default,
              }}
            >
              <ListItemText>
                <Typography variant="h3" sx={{ padding: 1 }}>
                  Syllabus
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem></ListItem>
          </List>
        </Box>
        <Box
          sx={{
            width: "70%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            pl: 5,
          }}
        >
          <Typography variant="h5">COMP_SCI 211-0</Typography>
          <Typography variant="h3">
            Fundamentals of Computer Programming II
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "60vh",
              backgroundColor: theme.palette.primary[3],
              mt: 2,
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
              <Typography variant="h2" sx={{ ml: 5 }}>
                Upcoming Deadlines
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                height: "100%",
                ml: 5,
              }}
            >
              <Typography variant="h4">
                Final Project Code: 3/9 11:59 PM
              </Typography>
              <Typography variant="h4">
                Final Project Guide: 3/11 11:59 PM
              </Typography>
              <Typography variant="h4">
                Final Project Demos: 3/11 2:00 PM
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default CanvasPage;
