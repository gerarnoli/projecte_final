import React from 'react';
import gerry from '../media/gerry.jpg';
import '../App.css';

const Dades = () => {
    return (
        <div className="dades" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
        >
            <h1>Fonts</h1>
            <ul>
                <li>Dades Covid: <a href="https://covid19tracking.narrativa.com/">covid19tracking.narrativa.com</a></li>
                <li>Dades Vacunes: <a href="https://covid-vacuna.app/">covid-vacuna.app</a></li>
            </ul>
            <h1>Contribuïdors</h1>
            <a href="https://github.com/gerarnoli"><img src={gerry} alt="gerarnoli"></img></a>
        </div>
    )
}

export default Dades