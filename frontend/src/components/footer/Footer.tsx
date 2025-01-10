import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          padding: 20,
          minHeight: "20vh",
          maxHeight: "30vh",
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center"}}>
          Built and Developed By
          <span>
            <Link
              style={{ color: "#E5E5E5" }}
              className="nav-link"
              to={"https://github.com/Em-Vi"}
            >
            EmVi
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
