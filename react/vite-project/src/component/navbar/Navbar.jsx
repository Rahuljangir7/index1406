import { MdOutlineMail } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import { useState } from "react";
import NavPage from "./NavPage";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let [navpage, setNavpage] = useState(false);
  const location = useLocation();

  const navPage = () => setNavpage(!navpage);

  // Check if the current page is not Home
  const isNotHomePage = location.pathname !== "/";

  return (
    <>
      <nav className={`navbar ${isNotHomePage ? "navbar-other-pages" : ""}`}>
        <FaBars onClick={navPage} />
        <h1>IMPLUSE</h1>
        <MdOutlineMail />
        {navpage && <NavPage navPage={navPage} />}
      </nav>
    </>
  );
};

export default Navbar;
