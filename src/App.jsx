import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Quality from "./components/Quality/Quality";
import Projects from "./components/Projects/Projects";
import They from "./components/They/They";
import Services from "./components/Services/Services";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/they" element={<They />} />
          <Route path="/service" element={<Services/>}/>
          <Route path="/quality" element={<Quality/>}/>
          <Route path="project" element={<Projects/>}/>
       
        </Routes>
           

      </div>

      <Footer />
    </>
  );
}

export default App;
