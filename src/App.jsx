import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteLayout } from "./layouts/RouteLayout";
import { HomePage } from "./pages/HomePage";
import { useEffect } from "react";
import Aos from "aos";

export default function App() {
  // AOS
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<h1>About page goes here</h1>} />
          <Route path="projects" element={<h1>Projects page goes here</h1>} />
          <Route path="contact" element={<h1>Contact page goes here</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
