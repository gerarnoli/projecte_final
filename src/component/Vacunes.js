import React,{useState,useEffect} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';

const Vacunes = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchPostList = async () => {
        const response = await fetch('https://covid-vacuna.app/data/latest.json');
        const json = await response.json();
        setData(json);
        console.log(data);
    }
    fetchPostList();
  }, [setData]);

  return (
    <div className="vacuna">
      <ReactBootstrap.Table striped bordered hover>
          <thead>
            <tr>
                <th></th>
                <th>Vacuna primera dosis</th>
                <th>Vacuna completa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{data[20].ccaa}</th>
              <td>{(data[20].porcentajePoblacionPrimeraDosis*100).toFixed(2)} %</td>
              <td>{(data[20].porcentajePoblacionCompletas*100).toFixed(2)} %</td>
            </tr>
          </tbody>
      </ReactBootstrap.Table>
    </div>
  );
}

export default Vacunes;


// function Vacunes() {
//   const [data,setData]=useState([]);

// const getData=()=>{
//   fetch('https://covid-vacuna.app/data/latest.json')
//     .then(function(response){
//       return response.json();
//     })
//     .then(function(myJson) {
//       console.log(myJson);
//       setData(myJson)
//     });
//   }
//   useEffect(()=>{
//     getData()
//   },[])