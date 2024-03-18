import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Pages */
import { HomePage } from "./components/pages/01_HomePage";
import { AboutUs } from "./components/pages/02_AboutUs";
import { Projects } from "./components/pages/03_Projects";
import { ContactUs } from "./components/pages/05_ContactUs";
import { LatestNews } from "./components/pages/06_LatestNews";
import { PageNotFound } from "./components/pages/15_PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/news" element={<LatestNews />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
