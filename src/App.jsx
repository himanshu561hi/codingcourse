import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import Success from "./pages/Success";

// Components import (Jo abhi banaye)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar sabse upar */}
        <Navbar />

        {/* Main Content (Ye change hota rahega) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/success/:id" element={<Success />} />
          </Routes>
        </main>

        {/* Footer sabse neeche */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
