import { MdOutlineMail } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";

const Navbar = () => {
  let [navpage, setNavpage] = useState(false);
  const navPage = () => {
    setNavpage(() => !false);
    console.log(navpage);
  };
  return (
    <>
      <nav>
        <FaBars onClick={navPage} />
        <h1>IMPLUSE</h1>
        <MdOutlineMail />
        {navpage ? (
          <>
            <div className="navpage">
              <GiCancel onClick={navPage} />
              <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Navbar;
