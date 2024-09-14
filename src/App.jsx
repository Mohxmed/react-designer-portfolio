import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteLayout } from "./layouts/RouteLayout";
import { HomePage } from "@pages/HomePage";
import About from "./pages/About";
import { useEffect } from "react";
import Aos from "aos";
import Projects from "@pages/Projects";
import ProjectView from "./pages/ProjectView";
import ScrollToTop from "./utils/ScrollTop";
import Contact from "./pages/Contact";

export default function App() {
  // AOS
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RouteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectView />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
