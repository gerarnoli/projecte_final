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

  while (data[20] === undefined) {
    return (
      <div>
          <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="taula-vacuna">
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
              <th className="vacuna">Total Espanya</th>
              <td>{(data[20].porcentajePoblacionPrimeraDosis*100).toFixed(2)} %</td>
              <td>{(data[20].porcentajePoblacionCompletas*100).toFixed(2)} %</td>
            </tr>
          </tbody>
      </ReactBootstrap.Table>
    </div>
  );
}

export default Vacunes;
