import React, { Component } from "react";
import './App.css';
import CovidList from "./component/CovidList";

// import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './paginas';
import About from './paginas/about';
import Servicios from './paginas/servicios';
import Contacto from './paginas/contacto';
 
function App() {
  return (
    <Router>
        <CovidList/>
        {/*<Navbar/>*/}
        {/* <switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/Servicios' component={Servicios} />
          <Route path='/contacto' component={Contacto} />
        </switch> */}
    </Router>
    
  );
}

export default App;