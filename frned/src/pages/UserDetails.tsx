import { useParams } from "react-router-dom";
import { User } from "../types/user";

const dummyUsers: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
  { id: 3, name: "Charlie", email: "charlie@mail.com" },
];

export default function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const user = dummyUsers.find((u) => u.id === Number(id));

  if (!user) return <h2>User not found!</h2>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
