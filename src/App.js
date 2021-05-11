import React, { Component } from "react";
import './App.css';

// HEADER

import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './paginas';
import About from './paginas/about';
import Servicios from './paginas/servicios';
import Contacto from './paginas/contacto';

// Import de la API COVID

import CovidList from "./component/CovidList";

// class App extends Component {
//   render(){
//     return(
//       <div className="App">
//         <CovidList />
//       </div>
//     )
//   }
// }
 
function App() {
  return (
    <Router>
        <CovidList/>
        <Navbar/>
        <switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/Servicios' component={Servicios} />
          <Route path='/contacto' component={Contacto} />
        </switch>
    </Router>
    
  );
}

export default App;