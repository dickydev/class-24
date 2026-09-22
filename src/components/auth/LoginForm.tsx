"use client";

import { useState, useEffect } from "react";

type User = {
  name: string;
};

export default function LoginForm() {
  const [user, setUser] = useState<User | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  function login() {
    const newUser: User = {
      name: "John Doe",
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    setUser(newUser);
  }

  function logout() {
    localStorage.removeItem("user");

    setUser(null);
  }

  if (isLoading) return <p>Checking sessions....</p>;
  if (!user) return <button onClick={login}>Login</button>;

  return (
    <section>
      <p>Hello, {user.name}</p>

      <button onClick={logout}>Logout</button>
    </section>
  );
}
