import React from "react";
import './App.css';
//import Taula from "./component/Taula";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./component/Navbar/Header";
import Home from './paginas/home.js';
import Footer from "./component/Footer";
import Covid from './paginas/about';
import Vacunes from './paginas/servicios';
import Contacto from './paginas/contacto';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
            <Navbar />
            <switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={Covid} />
              <Route path='/Servicios' component={Vacunes} />
              <Route path='/contacto' component={Contacto} />
            </switch>
            
        </Router>
      </div>
    <Footer/>
    </div>
  );
}

export default App;