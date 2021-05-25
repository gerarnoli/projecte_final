import React,{useState,useEffect} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

const Vacunes = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {/*
    const fetchPostList = async () => {
      console.log("antes");
      const data = await fetch(`http://localhost:3000/api/datos`);
      console.log("despues");
      console.log(data);
      // const {data} = await axios.get(`http://localhost:3000/api/datos`);
      // const data = await fetch('https://covid-vacuna.app/data/latest.json');
      // const json = await data.json();
      setPosts(data);
      console.log(posts);
    }
    fetchPostList();*/


    

      // Make a request for a user with a given ID
      axios.get('http://localhost:3000/api/datos')
        .then(function (response) {
          // handle success
          console.log(response);
          setPosts(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
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
      </ReactBootstrap.Table>
    </div>
  );
}

export default Vacunes;
