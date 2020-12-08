import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  }, []);

  if (user === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-center Detail">
      <h2>Detail Page</h2>
      <p>id : {user.id}</p>
      <p>Name : {user.name}</p>
    </div>
  );
};
