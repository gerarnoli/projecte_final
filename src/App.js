import React, {Component} from "react";
import './App.css';

import CovidList from "./Components/CovidList";

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Comunitats autònomes</h1>
        </header>
        <CovidList/>
      </div>
    )
  }
}

export default App;