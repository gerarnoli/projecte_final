import React,{useState,useEffect} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../App.css';
import axios from 'axios';

const Progressbar = () => {
    const [posts, setPosts] = useState([]);
    const [per_1, setPer1] = useState();
    const [per_2, setPer2] = useState();
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/datos')
          .then(function (response) {
            setPosts(response.data);
            let per1 = (response.data[20].porcentajePoblacionPrimeraDosis*100).toFixed(2);
            let per2 = (response.data[20].porcentajePoblacionCompletas*100).toFixed(2);
            setPer1(per1);
            setPer2(per2);
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
        <div className="progressbar">
            <h3>Primera dosis</h3>
            <ProgressBar now={per_1} label={`${per_1}%`}/><br/>
            <h3>Pauta completa</h3>
            <ProgressBar now={per_2} label={`${per_2}%`}/>
        </div>
    );
  }
  
  export default Progressbar;