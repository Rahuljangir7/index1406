import img1 from "../../assets/img1.avif";
import img2 from "../../assets/img2.avif";
import img3 from "../../assets/img3.avif";
import img4 from "../../assets/img4.avif";
import img5 from "../../assets/img5.avif";
import Hero from "../../component/hero/Hero";
import Links from "../../component/links/Links";
import { Blog, Travel } from "../../component/blog/Blog";
import { Post, PostCon } from "../../component/post/Post";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="hero-img">
        <div></div>
        <Hero />
        <Links />
      </div>
      <div className="blog-container">
        <div className="box1">
          <Post img={img1} />
        </div>
        <div className="box2">
          <Blog
            title={"This is my third & latest post"}
            para={
              "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution."
            }
          />
        </div>
      </div>
      <div className="banner"></div>
      <div className="blog-section section-1">
        <Travel
          title={"We love to travel"}
          para={
            "Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."
          }
        />
      </div>
      <div className="travel-container">
        <PostCon img={img2} name={"Sandy Beaches"} />
        <PostCon img={img3} name={"Forest Trails"} />
        <PostCon img={img4} name={"City Streets"} />
      </div>
      <div className="blog-container blog-2">
        <div className="box1">
          <Blog
            title={"This is my second post"}
            para={
              "Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
            }
          />
        </div>
        <div className="box2">
          <Post img={img5} />
        </div>
      </div>
      <div className="blog-section section-2">
        <Travel
          title={"Endlessly customizable"}
          para={
            "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
          }
        />
      </div>
    </>
  );
};

export default Home;
