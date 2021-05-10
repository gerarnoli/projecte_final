import React, {Component} from "react";
import './App.css';

import Header from "./Components/Header";
import CovidList from "./Components/CovidList";
import Footer from "./Components/Footer";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <CovidList/>
        <div id="footer"><Footer/></div>
      </div>
    )
  }
}

export default App;