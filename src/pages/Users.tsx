import { Link } from "react-router-dom";
import { User } from "../types/user";

const dummyUsers: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
  { id: 3, name: "Charlie", email: "charlie@mail.com" },
];

export default function Users() {
  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        {dummyUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
