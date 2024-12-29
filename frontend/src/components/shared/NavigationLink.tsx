import { Link } from "react-router-dom";

// Defining type instead of importing data directly has a number of advantages
// 1. TypeSafety in typeScript
// 2. Readability
// 3. No misuse 

type Props = {
    to: string;
    bg: string;
    text: string;
    textColor: string;
    // Here "?" is for an optional property
    onClick?: () => Promise<void>
}

function NavigationLink(props: Props) {
  return (
    <Link
    onClick={props.onClick}
    className="nav-link" 
    to={props.to} 
    style={{background: props.bg, color: props.textColor}}
    >
        {props.text}
    </Link>
  )
}

export default NavigationLink