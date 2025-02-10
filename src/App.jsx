import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Service from "./page/service";
import BlogDetails from "./page/BlogDetails";

function App() {
  return (
    <div data-theme="light">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Service />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
