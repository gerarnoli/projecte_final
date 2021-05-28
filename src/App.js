import React from "react";
import './App.css';

import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Header from "./component/Header";
import Inicio from './paginas/inicio.js';
import Footer from "./component/Footer";
import Covid from './paginas/Covid';
import Vacunas from './paginas/headVacunes';
import Dades from './paginas/Dades';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Header />
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/Covid' exact component={Covid} />
          <Route path='/Vacunas' exact component={Vacunas} />
          <Route path='/Dades' exact component={Dades} />
        </Switch>
        
      </Router>
    </div>
    <Footer />
    </div>
  );
}

export default App;