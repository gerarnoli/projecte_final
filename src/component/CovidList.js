import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  return { items: sortedItems, requestSort, sortConfig };
};

const CovidTable = () => {
  const [posts, setPosts] = useState([]);
  const [total_1, setTotal_1] = useState();
  const [total_2, setTotal_2] = useState();
  const {items, requestSort, sortConfig} = useSortableData(posts);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  useEffect(() => {
    const fetchPostList = async () => {
      let today = new Date();
      let total_1 = 0;
      let total_2 = 0;
      today = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
      const {data} = await axios(`https://api.covid19tracking.narrativa.com/api/${today}/country/spain`)
      setPosts(data.dates[today].countries.Spain.regions);
      console.log(data.dates[today].countries.Spain.regions);
      data.dates[today].countries.Spain.regions.map((item) => (
        total_1 += item.today_new_open_cases,
        total_2 += item.today_new_deaths
      ))
      setTotal_1(total_1);
      setTotal_2(total_2);
    }
    fetchPostList()
  }, [setPosts])

  return (
    <div className="taula-covid">
      <table className="taula">
        <thead>
          <tr>
            <th><button type="button" onClick={() => requestSort('name')} className={getClassNamesFor('name')}>Comunitats autònomes</button></th>
            <th><button type="button" onClick={() => requestSort('today_new_open_cases')} className={getClassNamesFor('today_new_open_cases')}>Nous casos avui</button></th>
            <th><button type="button" onClick={() => requestSort('today_new_deaths')} className={getClassNamesFor('today_new_deaths')}>Noves morts avui</button></th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.today_new_open_cases}</td>
                <td>{item.today_new_deaths}</td>
              </tr>
            ))
          }
          <tr>
            <th>Total avui</th>
            <td>{total_1}</td>
            <th>{total_2}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CovidTable
