import "./App.css";
import React, { useState, useEffect } from "react";
import { serverUrl } from "./config";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`${serverUrl}/users`, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.log("Kunde inte hämta användare");
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = async () => {
    const response = await fetch(`${serverUrl}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Felaktiga uppgifter");
    }
  };

  const handleRegister = async () => {
    const response = await fetch(`${serverUrl}/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Kunde inte skapa användare");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Användarnamn:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Lösenord:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">{isLogin ? "Logga in" : "Registrera"}</button>
      <br />
      <span onClick={handleToggle}>
        {isLogin ? "Har du inget konto?" : "Har du redan ett konto?"}
      </span>
    </form>
  );
}

export default LoginForm;
