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
  const [total, setTotal] = useState({});
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
      today = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
      console.log(today);
      const {data} = await axios(`https://api.covid19tracking.narrativa.com/api/${today}/country/spain`)
      setPosts(data.dates[today].countries.Spain.regions);
      setTotal(data.total)
      console.log(data)
    }
    fetchPostList()
  }, [setPosts])

  return (
    <div className="taula-covid">
      <table className="taula">
        <thead>
          <tr>
            <th><button type="button" onClick={()=>requestSort('name')} className={getClassNamesFor('name')}>Comunitats autònomes</button></th>
            <th><button type="button" onClick={() => requestSort('price')} className={getClassNamesFor('price')}>Nous casos avui </button></th>
            <th><button type="button" onClick={() => requestSort('stock')} className={getClassNamesFor('stock')}>Noves defuncions avui</button></th>
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
            <td>{total.today_new_open_cases}</td>
            <th>{total.today_new_deaths}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CovidTable
