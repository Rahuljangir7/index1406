import { Link } from 'react-router-dom';
import './links.css';

const Links = () => {
  return (
    <>
        <div className="links">
            <Link to="/about">FIND OUT MORE</Link>
            <Link to="/contact/">GET IN TOUCH</Link>
        </div>
    </>
  )
}

export default Links