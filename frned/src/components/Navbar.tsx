import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}
