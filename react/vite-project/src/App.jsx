import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import BlogPage from "./pages/blogpage/BlogPage";
import Footer from "./component/footer/Footer";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import CategoriesBlog from "./categories/CategoriesBlog";

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sandybeach" element={<CategoriesBlog />} />
        <Route path="/foresttrails" element={<CategoriesBlog />} />
        <Route path="/citystreets" element={<CategoriesBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
