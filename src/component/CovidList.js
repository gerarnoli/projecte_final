import axios from 'axios';
import React from 'react';

const url = "https://api.covid19tracking.narrativa.com/api/2021-05-05/country/spain";

export default class CovidList extends React.Component {
    state = {
        llista: []
    }

<<<<<<< HEAD
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
                <h1>Nous casos avui</h1>
                <ul>
                    {this.state.llista.map(item => <li>{item.id}<span>: </span>{item.today_new_open_cases}</li>)}
                    {/*this.state.llista.id*/}
                </ul>
            </React.Fragment>
        )
    }
}
=======
    useEffect(() => {
        const fetchPostList = async () => {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
    
            today = yyyy + '-' + mm + '-' + dd;
    
            console.log(today);
            const {data} = await axios(`https://api.covid19tracking.narrativa.com/api/${today}/country/spain`)
            
            setPosts({blogs: data.dates[today].countries.Spain.regions})
            console.log(data)
        }
        fetchPostList()
    }, [setPosts])

    return (
        <div>
            <ReactBootstrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Comunitat autònoma</th>
                        <th>Nous casos avui</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.blogs && posts.blogs.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.today_new_open_cases}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </ReactBootstrap.Table>
        </div>
    )
}

export default BootTable
>>>>>>> Gerry
