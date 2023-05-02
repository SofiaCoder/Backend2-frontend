import React, { useState } from "react";
import { serverUrl } from "./config";
import { useNavigate } from "react-router-dom";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
      localStorage.setItem('loggedinUser', username.toLowerCase());
      onLogin(); // Set isLoggedIn to true in the parent component
      // navigate("/myflowpage"); // Navigate to MyFlowpage after successful login
    } else {
      setErrorMessage("Felaktiga uppgifter");
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
      onLogin(); // Set isLoggedIn to true in the parent component
      navigate("/mainpage"); // Navigate to MyFlowpage after successful login
    } else {
      setErrorMessage("Kunde inte skapa användare");
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
      <button type="button" onClick={handleToggle}>
        {isLogin ? "Registrera istället" : "Logga in istället"}
      </button>
      <br />
      <div style={{ color: "red" }}>{errorMessage}</div>
    </form>
  );
}

export default LoginForm;
