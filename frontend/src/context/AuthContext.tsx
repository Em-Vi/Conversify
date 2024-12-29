import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  checkAuthStatus,
  loginUser,
  logoutUser,
  signupUser,
} from "../helpers/api-communicator";

// UseContext to avoid prop drilling
// type defines Blueprint for structure of object

type User = {
  name: string;
  email: string;
};

// Types for defining key and type of the prop that has to be passed down
// This is later used in createContext as seen below
// When a parent is wrapped inside a provider with value to be passed down
// The child is able to access it with useContext

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

// AuthContext is a box of data and AuthProvider provides that data to components it wraps
// Whatever the AuthProvider wraps inside is called children of AuthProvider
// It has ReactNode type it means it accepts any type of react data

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // What is bracket at end of useEffect
  // If no bracket, then useEfffect runs on every render
  // If empty bracket, useEffect only runs when component is mounted
  // If variable inside bracket, Runs when the variable changes

  useEffect(() => {
    // fetch if users cooking are valid and skip login
    async function checkStatus() {
      const data = await checkAuthStatus();
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
    checkStatus();
  }, []);

  const login = async (email: string, password: string) => {
    //sends email and passwrod to backend
    const data = await loginUser(email, password);
    setUser({ email: data.email, name: data.name });
    setIsLoggedIn(true);
  };

  const signup = async (name: string, email: string, password: string) => {
    const data = await signupUser(name, email, password);
    setUser({ email: data.email, name: data.name });
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await logoutUser();
    setIsLoggedIn(false);
    setUser(null);
    window.location.reload();
  };

  // Prop values

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// custom to access useContext easier

export const useAuth = () => useContext(AuthContext);

// To put it simply
// AuthContext stores uses useContext hook to store structure of prop value types
// Auth provider is used to process the prop value and it is used to wrap the component whom the values hsould be passed to
// The useAuth is a custom hook to call useContext(AuthContext)
