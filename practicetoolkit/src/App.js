import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./pages/Video";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  // return <Video />;

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
        </Routes>
     
        <Footer/>
      </Router>
    </>
  );
}

export default App;
