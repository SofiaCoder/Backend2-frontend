import React, { useState } from "react";
import { serverUrl } from "./config";

import "./styles.css";

function MyFlowPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [postText, setPostText] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${serverUrl}/users?search=${searchTerm}`, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
        setError(null);
      } else {
        setUsers([]);
        setError("Något gick fel. Försök igen senare.");
      }
    } catch (error) {
      setUsers([]);
      setError("Något gick fel. Försök igen senare.");
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${serverUrl}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ text: postText }),
      });
      if (response.ok) {
        setPostText("");
        const data = await response.json();
        alert(`Tack ${loggedInUser.username}! Ditt inlägg är postat.`);
      } else {
        setError("Något gick fel. Försök igen senare.");
      }
    } catch (error) {
      setError("Något gick fel. Försök igen senare.");
    }
  };

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  return (
    <div className="container">
      <h1>MyFlowPage</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <label htmlFor="search-input">Sök efter användare:</label>
        <div className="search-container">
          <input
            type="text"
            id="search-input"
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit">Sök</button>
        </div>
      </form>
      {error && <p>{error}</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      )}
      <form className="post-form" onSubmit={handlePostSubmit}>
        <label htmlFor="post-textarea">
          Hej {loggedInUser?.username ?? "anonym"}! Berätta vad som händer:
        </label>
        <textarea
          id="post-textarea"
          value={postText}
          onChange={handlePostTextChange}
        />
        <button type="submit">Posta inlägg</button>
      </form>
    </div>
  );
}

export default MyFlowPage;
