import { Link } from "react-router-dom";
import Button from "../../utility/button/Button";
import "./blog.css";

// eslint-disable-next-line react/prop-types
export const Blog = ({ title, para, linkName }) => {
  return (
    <>
      <div className="blog">
        <div className="line"></div>
        <h3>{title}</h3>
        <p>{para}</p>
        <Link to={linkName}>
          <Button name="READ MORE" />
        </Link>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
export const Travel = ({ title, para }) => {
  return (
    <>
      <div className="blog travel">
        <div className="line"></div>
        <h3>{title}</h3>
        <p>{para}</p>
        <Link to="/about">
          <Button name={"FIND OUT MORE"} />
        </Link>
      </div>
    </>
  );
};
