import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import BlogPage from "./pages/blogpage/BlogPage";
import Footer from "./component/footer/Footer";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import CategoriesBlog from "./categories/CategoriesBlog";
import ScrollToTop from "./ScrollToTop";
import NotFount from "./pages/notfound/NotFount";
import BlogPageDetail from "./blogpagedetail/BlogPageDetail";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:category" element={<CategoriesBlog />} />
        <Route path="/blog/:blogpagedetail" element={<BlogPageDetail />} />
        <Route path="/*" element={<NotFount />} /> {/* 404 Not Found route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// https://novolio-impulse.netlify.app