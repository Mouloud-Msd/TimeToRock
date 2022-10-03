import { Typography, Box } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import AppBar from "./AppBar";

const Header = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Changa, sans-serif",
          }}
        >
          It's
          <GradeIcon sx={{ width: "2rem", height: "2rem", color: "#7895B2" }} />
          ROCK
          <GradeIcon sx={{ width: "2rem", height: "2rem", color: "#7895B2" }} />
          Time
        </Typography>
      </Box>
      <AppBar />
    </>
  );
};

export default Header;
