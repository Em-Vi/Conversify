import { Box, Button, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "6rem", color: "white" }}>404</h1>
      <Typography sx={{ fontSize: "1.5rem", margin: "20px 0", color: "#555" }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        onClick={handleGoHome}
        sx={{
          width: "200px",
          fontWeight: 700,
          color: "white",
          mx: "auto",
          my: "auto",
          bgcolor: red[300],
          borderRadius: 3,
          ":hover": {
            bgcolor: red.A400,
          },
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default NotFound;
