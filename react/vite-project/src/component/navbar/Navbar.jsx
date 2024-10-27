import { MdOutlineMail } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import { useState } from "react";
import NavPage from "./NavPage";

const Navbar = () => {
  let [navpage, setNavpage] = useState(false);
  const navPage = () => {
    setNavpage(!navpage);
    console.log(navpage);
  };

  return (
    <>
      <nav>
        <FaBars onClick={navPage} />
        <h1>IMPLUSE</h1>
        <MdOutlineMail />
        {navpage && <NavPage navPage={navPage} />}
      </nav>
    </>
  );
};

export default Navbar;
