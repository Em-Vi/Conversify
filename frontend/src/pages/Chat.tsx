import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { deleteUserChats, getUserChats, sendchatRequest } from "../helpers/api-communicator";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// How async await works
// async in a function is used to return function as a promise (resolve or reject)
// In await the function execution is stopped until promise is resolved
// If a promise is rejected it throws error

const Chat = () => {
  type Message = {
    role: "user" | "assistant";
    content: string;
  };

  const navigate = useNavigate()
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  // To get input data
  const inputRef = useRef<HTMLInputElement | null>(null);
  // Send data
  const handleSubmit = async () => {
    const content = inputRef.current?.value as string;
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = { role: "user", content };
    // prev is the current value of the chatMessages state (automatically passed to the updater function)
    setChatMessages((prev) => [...prev, newMessage]);
    const chatData = await sendchatRequest(content);
    setChatMessages([...chatData.chats]);
  };

  // Clear Conversation
  const handleDeleteChats = async () => {
    try {
      toast.loading("Deleting chats", {id:"deletechats"})
      await deleteUserChats()
      setChatMessages([])
      toast.success("Deleted Chats successfully", {id: "deletechats"})
    } catch (error) {
      console.log(error)
      toast.error("Deleting chats failed", {id: "deletechats"})
    }
  }

  const auth = useAuth();

  // UseLayoutEffect is used Before DOM is painted, useEffect simultanously on render of DOM
  // retireves chats while logged in
  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Loading Chats", { id: "loadchats" });
      getUserChats()
        .then((data) => {
          setChatMessages([...data.chats]);
          toast.success("Successfully loaded chats", { id: "loadchats" });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Loading Failed", { id: "loadchats" });
        });
    }
  }, [auth]);

  // if not logged in and try to acces chats, redirects to login
  useEffect(()=>{
    if(!auth?.user){
      return navigate("/login")
    }
  },[auth,navigate])

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are Talking with a ChatBot
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You can ask anything to the ChatBot it will answer accordingly.
            Caution: ChatBot can be wrong sometimes
          </Typography>
          <Button
          onClick={handleDeleteChats}
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
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          width: "100%",
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            mx: "auto",
            fontWeight: 600,
            mb: 2,
            color: "white",
          }}
        >
          Model - GPT-4o-mini
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        <div
          style={{
            width: "100%",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            margin: "auto",
          }}
        >
          {" "}
          <input
            ref={inputRef}
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "30px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton
            onClick={handleSubmit}
            sx={{ mx: 1, color: "white" }}
          >
            <IoMdSend />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Chat;
