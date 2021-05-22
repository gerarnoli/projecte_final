import React from "react";
import './App.css';
import Vacunes from "./component/Vacunes";
import Taula from "./component/Taula";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./component/Navbar/Header";
import Home from './paginas';
import Footer from "./component/Footer";
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
            <Vacunes/>
            <Taula/>
        </Router>
      </div>
    <Footer />
    </div>
  );
}

export default App;