import "./navbar.css";
import { GiCancel } from "react-icons/gi";
import { Outlet, Link } from "react-router-dom";

const NavPage = ({ navPage }) => {
  return (
    <>
      <div className="navpage">
        <GiCancel onClick={navPage} />
        <ul>
          <li>
            <Link onClick={navPage} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link onClick={navPage} to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link onClick={navPage} to="/blogpage">
              BLOG
            </Link>
          </li>
          <li>
            <Link onClick={navPage} to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default NavPage;
