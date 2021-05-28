import React from 'react';
import '../App.css';
import virus from '../media/virus.gif';

const inicio = () => {
    return (
        <div>
            <img src={virus} class="virus" alt="virus"></img>
        </div>
    )
}

export default inicio;