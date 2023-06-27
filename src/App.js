import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
    <div className="container">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
