import React from "react";
import { useFetch } from "./../types/useFetch";

const UserList = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>User List</h2>
      <ul>
        {data?.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
