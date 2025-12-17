import { useState } from "react";

interface User {
  email: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  function login(email: string, password: string) {
    // Normally API call here
    setUser({ email });
    localStorage.setItem("loggedUser", email);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("loggedUser");
  }

  return { user, login, logout };
}
