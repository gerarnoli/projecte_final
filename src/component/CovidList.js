import React, {useEffect, useState} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import '../App.css';

const CovidList = () => {
    const [posts, setPosts] = useState({blogs: []});
    const [total, setTotal] = useState({});

    useEffect(() => {
        const fetchPostList = async () => {
            let today = new Date();    
            today = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
            console.log(today);

            const {data} = await axios(`https://api.covid19tracking.narrativa.com/api/${today}/country/spain`)

            setPosts({blogs: data.dates[today].countries.Spain.regions});

            posts.blogs.map((item) => ({ ...item, sort:true}));

            setTotal(data.total)
            console.log(data)
        }
        fetchPostList()
    }, [setPosts])

    return (
        <div>
            <ReactBootstrap.Table striped bordered hover>
                <thead>
                    <tr class="header">
                        <th></th>
                        <th>Nous casos avui</th>
                        <th>Noves defuncions avui</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.blogs.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.today_new_open_cases}</td>
                                <td>{item.today_new_deaths}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <th>Total avui</th>
                        <td>{total.today_new_open_cases}</td>
                        <th>{total.today_new_deaths}</th>
                    </tr>
                </tbody>
            </ReactBootstrap.Table>
        </div>
    )
}

export default CovidList
