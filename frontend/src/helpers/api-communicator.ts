import axios from "axios";

// This function is the communicator between frontend and backend
// It sends user data to backend
// It also recieves the database data and give it to frontend
// This  

export const loginUser = async (email: string, password: string) => {
    const res = await axios.post("/user/login", { email, password });
    if (res.status !== 200){
        throw new Error("Unable to login")
    }
    const data = await res.data
    return data
};

export const signupUser = async (name: string,email: string, password: string) => {
    const res = await axios.post("/user/signup", { name,email, password });
    if (res.status !== 201){
        throw new Error("Unable to signup")
    }
    const data = await res.data
    return data
};

// auth-status runs verifyToekn middlware
export const checkAuthStatus = async () => {
    const res = await axios.get("/user/auth-status");
    if (res.status !== 200){
        throw new Error("Unable to authenticate")
    }
    const data = await res.data
    return data
};

// sends user message
export const sendchatRequest = async (message:string) =>{
    const res = await axios.post("/chat/new", {message}, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.status!==200){
        throw new Error("Unable to send chat")
    }
    const data = await res.data
    return data
}

// Load the chats
export const getUserChats = async () =>{
    const res = await axios.get("/chat/all-chats")
    if (res.status!==200){
        throw new Error("Unable to retrieve chat data")
    }
    const data = await res.data
    return data
}

export const deleteUserChats = async () =>{
    const res = await axios.delete("/chat/delete")
    if (res.status!==200){
        throw new Error("Unable to clear chat data")
    }
    const data = await res.data
    console.log("here")
    return data
}
// from authcontext
export const logoutUser = async () =>{
    const res = await axios.get("/user/logout")
    if (res.status!==200){
        throw new Error("Unable to logout")
    }
    const data = await res.data
    return data
}
