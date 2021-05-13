import axios from "axios";

function Vacunes() {
    axios.get('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json', {
    })
    .then(function(info) {
    })
    .catch(function() {
    })
    .then(function() {
        // always executed
    })

    return (
        <div>
            <p></p>
        </div>
    )
}

export default Vacunes;