import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";

function App() {
  return (
    <div className="layout">
      <aside>
        <Sidebar />
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
