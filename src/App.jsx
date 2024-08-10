import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Quality from "./components/Quality/Quality";
import Projects from "./components/Projects/Projects";
import They from "./components/They/They";
// import Services from "./components/Services/Services";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ServiceText from "./components/ServiceText/ServiceText";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/they" element={<They />} />
          <Route path="/service" element={<ServiceText />} />
          <Route path="/quality" element={<Quality />} /> 
          <Route path="/project" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

