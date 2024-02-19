import React from 'react'
import "./styles/App.css";
import Navigator from "./components/Navigator";
import Projects from "./components/Projects"
import Shaun from "./components/Shaun"
import Fun from "./components/Fun"
import Home from "./components/Home"
import About from "./components/About"
import FAQ from "./components/FAQ"
import WAI from "./components/WAI"


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      
      <Router>
      <Navigator/> 
      
          <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/fun' exact element={<Fun />} />
            <Route path='/projects' exact element={<Projects />} />
            <Route path='/Shaun' exact element={<Shaun />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/FAQ' exact element={<FAQ />} />
            <Route path='/WAI' exact element={<WAI />} />
          </Routes>
     
      </Router>
    </div>
  );
}

export default App;