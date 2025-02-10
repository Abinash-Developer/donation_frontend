import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/sign-in" element={<Signin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
