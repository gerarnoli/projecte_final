import React, {Component} from "react";
import './App.css';
import CovidList from "./Components/table";

class App extends Component {
  render(){
    return (
      <div className="App">
        <CovidList/>
      </div>
    )
  }
}

export default App;