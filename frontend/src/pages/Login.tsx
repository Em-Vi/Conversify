import { Box, Button, Typography } from "@mui/material";
import Customizedinput from "../components/shared/CustomizedInput";
import { IoIosLogIn } from "react-icons/io";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Login() {

  const navigate = useNavigate()
  const auth = useAuth()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    try{
      toast.loading("Signing In",{id: "login"})
      await auth?.login(email,password)
      toast.success("Signed in Successfully",{id: "login"})
    }catch(error){
      console.log(error)
      toast.error("Signing In Failed",{id: "login"})
    }
  }
  // if user logged in going to login page again causes to go to chat
  useEffect(()=>{
    if(auth?.user){
      return navigate("/chat")
    }
  })

  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box
        display={"flex"}
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={"auto"}
        mt={16}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>
            <Customizedinput type="email" name="email" label="Email" />
            <Customizedinput type="password" name="password" label="Password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "#3A86FF",
                color:"#E5E5E5",
                ":hover": {
                  bgcolor : "#E5E5E5",
                  color: "#A8A8A8",
                },
              }}
              endIcon={<IoIosLogIn/>}
            >
              login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
