import './post.css';

// eslint-disable-next-line react/prop-types
export  const Post = ({img}) => {
  return (
    <>
    <div className="post-img">
    <a href="https://novolio-impulse.netlify.app/blog/this-is-latest-post/">
        <img src={img} alt="image" />
    </a>
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