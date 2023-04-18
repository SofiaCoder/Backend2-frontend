import "./App.css";
import React, { useState, useEffect } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find((u) => u.username === username);
    if (user && user.password === password) {
      // Användaren är inloggad
    } else {
      // Felaktiga uppgifter
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
