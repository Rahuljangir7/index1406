import "./pageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="notfound">
      <div className="notfound-box">
        <p className="page404">404</p>
        <h1>Page not found</h1>
        <p>Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="link-box">
          <Link to="/">Go back home</Link>
          <Link to="/contact">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
