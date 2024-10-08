import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shërbimet from "./pages/Offers";
import Kontakt from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sherbimet" element={<Shërbimet />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
