import React from 'react';
import gerry from '../media/gerry.jpg';
import pedro from '../media/pedro.jpg';
import bayron from '../media/bayron.jpg';
import '../App.css';

const Dades = () => {
    return (
        <div className="dades">
            <h1>Fonts</h1>
            <ul>
                <li>Dades Covid: <a href="https://covid19tracking.narrativa.com/">covid19tracking.narrativa.com</a></li>
                <li>Dades Vacunes: <a href="https://covid-vacuna.app/">covid-vacuna.app</a></li>
            </ul>
            <br/>
            <h1>Contribuïdors</h1>
            <a href="https://github.com/gerarnoli"><img src={gerry} alt="gerry"></img></a>
            <a href="https://github.com/a16pednieper"><img src={pedro} alt="pedro"></img></a>
            <a href="https://github.com/ShadowKiller11"><img src={bayron} alt="bayron"></img></a>
        </div>
    )
}

export default Dades