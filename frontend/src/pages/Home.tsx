import { Box, Typography} from "@mui/material";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Box width={"100%"} height={"100%"} sx={{overflowX:"hidden"}}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          height: "100px"
        }}
      >
        <Box sx={{ textAlign: "center"}}>
          <TypingAnim />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { md: "column", sm: "column", xs: "column" },
          gap: 0,
          my: 5,
        }}
      >
        <img
          src="Conversify.png"
          alt="conversify"
          style={{ width: "200px", margin: "auto" }}
        />
        <Box sx={{ display: "flex", width: "100%", mx: "auto", justifyContent:"center" }}>
          <Typography sx={{fontSize:{md: 100, xs: 50, sm:50}, textTransform:"uppercase",textAlign:"center",color:"#E5E5E5",fontFamily:"sans-serif"}}>
            {"Conversify"}
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
