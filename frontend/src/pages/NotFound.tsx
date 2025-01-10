import { Box, Button, Typography } from "@mui/material";
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
      <h1 style={{ fontSize: "6rem", color: "#E5E5E5" }}>404</h1>
      <Typography sx={{ fontSize: "1.5rem", margin: "20px 0", color: "#555" }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        onClick={handleGoHome}
        sx={{
          width: "200px",
          fontWeight: 700,
          color: "#A8A8A8",
          mx: "auto",
          my: "auto",
          bgcolor: "#3A86FF",
          borderRadius: 3,
          ":hover": {
            bgcolor: "#E5E5E5",
          },
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default NotFound;
