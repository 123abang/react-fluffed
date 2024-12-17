import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './app/page'




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/stocks" element={<Stock />} /> */}
      </Routes>
    </Router>
  );
};

export default App; 
