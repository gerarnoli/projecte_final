import React, {useState, useEffect } from "react";
import axios from "axios";
import './App.css';
 
const url = "https://api.covid19tracking.narrativa.com/api/2021-05-05/country/spain";
 
function App() {
 
  const [userData, setUserData] = useState({});
 
  useEffect( () => {
    getUrlWithfetch();
  }, []);
 
  const getUrlWithfetch = async () => {
    const response = await axios.get(url);    
    console.log(response.data);
    setUserData(response.data.dates["2021-05-05"].countries.Spain.regions);    
    //console.log(response.data.dates["2021-05-05"].countries.Spain.regions);
    console.log(response.data.dates["2021-05-05"].countries.Spain.regions);
  };
 
  const listaComunidades = userData.map((c) => <div key={c.id}>{c.id}</div>);
  return (
    <div className="App">
          <header className="App-header">
            <h2>Datos Kovid  {userData.updated_at}</h2>
          </header>
 
          <body className="App-body">
          <h4> pepe {userData[5].id}</h4>
        <div>
          {listaComunidades}
        </div>
         
          </body>
 
     </div>     
  );
 
 
}
 
 
export default App;