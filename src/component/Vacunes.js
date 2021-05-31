import React,{useState,useEffect} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import ProgressBar from "../component/progressbar";
import { app } from 'firebase-functions';

const cors = require('cors');

app.use(cors(
  config.application.cors.server
));

const Vacunes = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
      axios.get('http://52.73.80.130/api/datos')
        .then(function (response) {
          console.log(response);
          setPosts(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });
  }, [setPosts]);

  while (posts[20] === undefined) {
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
              <td>{(posts[20].porcentajePoblacionPrimeraDosis*100).toFixed(2)} %</td>
              <td>{(posts[20].porcentajePoblacionCompletas*100).toFixed(2)} %</td>
            </tr>
          </tbody>
      </ReactBootstrap.Table><br/>
      <ProgressBar/>
    </div>
  );
}

export default Vacunes;
