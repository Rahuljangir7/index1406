import "./navbar.css";
import { GiCancel } from "react-icons/gi";

const NavPage = ({navPage, styles}) => {
  return (
    <div className="navpage" style={styles}>
      <GiCancel onClick={navPage} />
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default NavPage;
