import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Service = lazy(() => import("./components/Service/Serveice"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Sidebar = lazy(() => import("./components/Navbar/Sidebar"));
const Submenu = lazy(() => import("./components/Navbar/Submenu"));



function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Submenu />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
