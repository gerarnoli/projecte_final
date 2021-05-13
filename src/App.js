import React from "react";
import './App.css';
import CovidList from "./component/CovidList"; // Import de la API COVID

import Navbar from "./component/Navbar/Header";
import Footer from "./component/Footer"; // FOOTER
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './paginas';
import About from './paginas/about';
import Servicios from './paginas/servicios';
import Contacto from './paginas/contacto';



function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
    
    <Router>
        <Navbar />
        <switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/Servicios' component={Servicios} />
          <Route path='/contacto' component={Contacto} />
        </switch>
        <CovidList/>
    </Router>
    </div>
    <Footer/>
    </div>
    
  );
}

export default App;