import { AppBar, Toolbar } from '@mui/material'
import Logo from './shared/Logo'
import { useAuth } from '../context/AuthContext'
import NavigationLink from './shared/NavigationLink'

const Header = () => {
  const auth = useAuth()
  return (
   <AppBar
    sx={{bgcolor: "transparent", position:"static", boxShadow:"none"}}
    >
    <Toolbar sx={{display:"flex"}}>
        <Logo />
        <div>
          {auth?.isLoggedIn?(
          <>
            <NavigationLink 
              bg="#3A86FF"
              to="/chat"
              text="Go to Chat"
              textColor="black"
            />

            <NavigationLink 
              bg="#22D48F"
              to="/"
              text="logout"
              textColor="white"
              onClick={auth.logout}
            />

          </>):(

          <>
            <NavigationLink 
            bg="#3A86FF"
            to="/signup"
            text="signup" 
            textColor="black"
            />

            <NavigationLink
            bg="#22D48F"
            to="/login"
            text="login"
            textColor="white"
            />
          </>
        )}
        </div>
    </Toolbar>
   </AppBar>
  )
}

export default Header