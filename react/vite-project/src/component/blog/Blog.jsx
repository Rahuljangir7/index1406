import Button from "../../utility/button/Button";
import "./blog.css";

// eslint-disable-next-line react/prop-types
export const Blog = ({title,para}) => {
  return (
    <>
        <div className="blog">
          <div className="line"></div>
          <h3>
            {title}
          </h3>
          <p>
           {para}
          </p>
          <Button name="READ MORE" />
        </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
export const Travel = ({title,para})=>{
  return (
    <>
      <div className="blog travel">
        <div className="line"></div>
        <h3>{title}</h3>
        <p>
          {para}
        </p>
        <Button name ={"FIND OUT MORE"}/>
      </div>
    </>
  )
}
