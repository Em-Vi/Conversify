import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div
        style={{
            display:"flex",
            marginRight: "auto",
            alignItems:"center",
            gap: "8px"
        }}
    >
        <Link to={"/"} style={{display: "flex", flexDirection:'row', gap: "5px"}}>
            <img 
            src="Conversify.png" 
            alt="openai" 
            width={"30px"}
            height={"30px"}
            />
            <Typography sx={{
                display:{md:"block",sm:"none",xs:"none"},
                mr:"auto",
                fontWeight:"800",
                textShadow:"2px 2px 20px #000"
            }}>
                <span style={{fontSize:"20px"}}>Conversify</span>
            </Typography>
        </Link>
    </div>
  )
}

export default Logo