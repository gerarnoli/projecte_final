import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';

const BootTable = () => {

    const [posts, setPosts] = useState({blogs: []})

    useEffect(() => {
        const fetchPostList = async () => {
            const {data} = await axios('https://api.covid19tracking.narrativa.com/api/2021-05-05/country/spain')
            
            setPosts({blogs: data.dates["2021-05-05"].countries.Spain.regions})
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
                        <th>Nous morts avui</th>
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