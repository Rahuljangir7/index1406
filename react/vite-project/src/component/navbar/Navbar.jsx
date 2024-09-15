import { MdOutlineMail } from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <nav>
        <FaBars/>
        <h1>IMPLUSE</h1>
        <MdOutlineMail/>
    </nav>
    </>
  )
}

export default Navbar;