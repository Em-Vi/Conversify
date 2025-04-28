import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1` //  replace with your backend url or localhost:5000/api/v1
axios.defaults.withCredentials = true;

// THeme for app content
const theme = createTheme({
  typography:{
    fontFamily: "Roboto Slab,serif",
    allVariants: {color:"#A8A8A8"},
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme = {theme}>
          <Toaster position="top-right" />
          <App />
        </ThemeProvider>
      </BrowserRouter>  
    </AuthProvider>
  </StrictMode>,
)
