import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteLayout } from "./layouts/RouteLayout";
import { HomePage } from "./pages/HomePage";
import About from "./pages/About";
import { useEffect } from "react";
import Aos from "aos";

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
      <Routes>
        <Route path="/" element={<RouteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<HomePage />} />
          <Route path="contact" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
