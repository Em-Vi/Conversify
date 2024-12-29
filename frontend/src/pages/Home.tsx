import { Box, useMediaQuery, useTheme } from "@mui/material";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
  const theme = useTheme();
  const isbelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width={"100%"} height={"100%"} sx={{overflowX:"hidden"}}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <TypingAnim />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          gap: 5,
          my: 10,
        }}
      >
        <img
          src="robot.png"
          alt="robot"
          style={{ width: "200px", margin: "auto" }}
        />
        <img
          className="image-inverted rotate"
          src="openai.png"
          alt="openai"
          style={{ width: "200px", margin: "auto" }}
        />
        <Box sx={{ display: "flex", width: "100%", mx: "auto" }}>
          <img
            src="chat.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isbelowMd ? "80%" : "60%",
              borderRadius: 20,
              boxShadow: "-5px -5px 105px #64f3d5",
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
