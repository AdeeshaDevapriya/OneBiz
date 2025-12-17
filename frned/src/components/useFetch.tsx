// import React from "react";
// import { useFetch } from "./../types/useFetch";

// const UserList = () => {
//     const { data, loading, error } = useFetch(
//         "https://jsonplaceholder.typicode.com/users"
//     );

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <>
//             <h2>User List</h2>
//             <ul>
//                 {data?.map((user: any) => (
//                     <li key={user.id}>
//                         {user.name} - {user.email}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// };

// export default UserList;


import { useQuery } from "@tanstack/react-query";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
};

function UserList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users</p>;

    return (
        <ul>
            {data.map((u: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                <li key={u.id}>{u.name}</li>
            ))}
        </ul>
    );
};

export default UserList;

