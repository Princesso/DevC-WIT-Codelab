import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const RobotCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(result => setData(result.data));
  }, []);

  return(
    <div className='cards'>
      {data.map(user => (
        <div className="card-container"> 
          <div><img src = {`https://robohash.org/${user.username}`} alt = '' /></div>
          <div className="username">{'Name:'} {user.username}</div>
          <div className="username">{'Phone:'} {user.phone}</div>
          <div className="username">{'Company: '}{user.company.name}</div>
        </div>
      ))}
    </div>
  )
}

export default RobotCard