import axios from 'axios';
import React from 'react';

const url = "https://api.covid19tracking.narrativa.com/api/2021-05-05/country/spain";

export default class CovidList extends React.Component {
    state = {
        llista: []
    }

    componentDidMount() {
        axios.get(url).then(res => {
            console.log(res);
            console.log(res.data.dates["2021-05-05"].countries.Spain.regions[5]);
            this.setState({llista: res.data.dates["2021-05-05"].countries.Spain.regions});
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>Nous casos avui</h2>
                <ul>
                    {this.state.llista.map(item => <li>{item.id}<span>: </span>{item.today_new_open_cases}</li>)}
                    {/*this.state.llista.id*/}
                </ul>
            </React.Fragment>
        )
    }
}