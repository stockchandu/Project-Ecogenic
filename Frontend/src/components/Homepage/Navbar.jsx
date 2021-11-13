import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  let getEmail = localStorage.getItem("email");
  let getName = localStorage.getItem("name");
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <p className="welcome">Welcome,</p>
          <h3>{getName}</h3>
        </div>
        <div className="nav-right">
          <FaBars />
        </div>
      </div>
    </>
  );
}

export { Navbar };
