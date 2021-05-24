import React, { Component } from 'react';
import VacunasLogo from '../../media/VacunasLogo.png';


class Logoheader extends Component {
    render() {
        return (
            <img src={VacunasLogo} alt="vacunasLogo" height="60" />
        )
    }
}

export default Logoheader;