import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";


export default () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container Home">
        {users.map((user) => {
          return (
            <div className="card text-center" style={{width: "18rem"}}>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <a className="card-link"><Link to={`/detail/${user.id}`}>Detail User</Link></a>
              </div>
            </div>
          );
        })}
    </div>
  );
};
