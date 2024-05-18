import React from 'react'
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import O0Content from "./components/O0Content";

const App = () => {
  return (
    
    <Router>
      <O0Content />
      <Toaster />
    </Router>
  );
}

export default App

