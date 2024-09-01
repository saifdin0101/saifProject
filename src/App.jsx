import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/homa";
import { About } from "./pages/about/about";
import { Navbar } from "./layout/navbar";
import { Footer } from "./layout/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
