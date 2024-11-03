import { Link } from 'react-router-dom';
import './post.css';

// eslint-disable-next-line react/prop-types
export  const Post = ({img,linkName}) => {
  return (
    <>
    <div className="post-img">
    <Link to={linkName}>
        <img src={img} alt="image" />
    </Link>
    </div>
    </>
  )
}



// eslint-disable-next-line no-unused-vars, react/prop-types
export const PostCon = ({img,name}) =>{
  return (
    <>
    <div className="travel-img">
      <img src={img} alt="travel-image" />
      <div className="img-name">
        {name}
        </div>
    </div>
    </>
  )
}