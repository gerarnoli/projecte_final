import React from "react";
import './App.css';
import Navbar from "./component/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import Services from './pages/servicios';
// import Contact from './pages/Contact';
// import SignUp from './pages/signup';
 
function App() {
  return (
    <Router>
        <Navbar />
    </Router>
    
  );
}
 
 
export default App;