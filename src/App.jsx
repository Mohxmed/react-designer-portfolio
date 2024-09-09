import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteLayout } from "./layouts/RouteLayout";
import { HomePage } from "./pages/HomePage";
import { useEffect } from "react";
import Aos from "aos";

export default function App() {
  // AOS
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<HomePage />} />
          <Route path="projects" element={<HomePage />} />
          <Route path="contact" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
