import React from 'react';
import CovidList from "../component/CovidList"; // Import de la API COVID

const Home = () => {
    return (
        <div className="principal">
            <CovidList />
        </div>
    )
}

export default Home
