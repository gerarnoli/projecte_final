import React from "react";
import './App.css';
import Vacunes from "./component/Vacunes";
import CovidList2 from "./component/CovidList-sort";

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
              <Route path='/about' component={About} />
              <Route path='/Servicios' component={Servicios} />
              <Route path='/contacto' component={Contacto} />
              <Route path='/' exact component={Home} />
            </switch>
            <Vacunes/>
            <CovidList2/>
        </Router>
      </div>
    <Footer />
    </div>
  );
}

export default App;