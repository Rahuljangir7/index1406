import "./footer.css";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
            <div className="footer-links">
            <div className="logo-name">IMPULSE</div>
              <div className="more-info">
                <h5>MORE INFO</h5>
                <a href="#">ABOUT</a>
                <a href="#">INFO</a>
                <a href="#">FAQ</a>
              </div>
              <div className="helpful-links">
                <h5>HELPFUL LINKS</h5>
                <a href="#">ABOUT</a>
                <a href="#">INFO</a>
                <a href="#">FAQ</a>
              </div>
              <div className="findoutmore">
                <h5>FIND OUT MORE</h5>
                <a href="#">ABOUT</a>
                <a href="#">INFO</a>
                <a href="#">FAQ</a>
              </div>
          </div>
          <div className="footer-content">
            <FaRegCopyright /> 2021 DESIGN BY NOVOLIO. IMAGES BY UNSPLASH
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
