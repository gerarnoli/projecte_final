import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';

const BootTable = () => {

    const [posts, setPosts] = useState({blogs: []})

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
