import React from "react";
import './App.css';
//import Taula from "./component/Taula";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./component/Navbar/Header";
import index from './paginas/index.js';
import Footer from "./component/Footer";
import Covid from './paginas/Covid';
import Vacunes from './paginas/headVacunes';
import Dades from './paginas/Dades';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
            <Navbar />
            <switch>
              <Route path='/' exact component={index} />
              <Route path='/Covid' component={Covid} />
              <Route path='/Vacunes' component={Vacunes} />
              <Route path='/Dades' component={Dades} />
            </switch>
            
        </Router>
      </div>
    <Footer/>
    </div>
  );
}

export default App;