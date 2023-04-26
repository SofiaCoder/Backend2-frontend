import React, { useState, useEffect } from "react";
import { serverUrl } from "./config";
import "./styles.css";

function MyFlowPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [postText, setPostText] = useState("");

  const [userPosts, setUserPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await fetch(`${serverUrl}/post`, {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUserPosts(data.posts);
        } else {
          setError("Något gick fel. Försök igen senare.");
        }
      } catch (error) {
        setError("Något gick fel. Försök igen senare.");
      }
    };
    fetchUserPosts();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${serverUrl}/user`, {
        method: "GET",
        credentials: "include",
        body: JSON.stringify({ username: username }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setSearchedUser(data.user);
        setUserPosts(data.user.posts);
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
        alert(`Tack ${username}! Ditt inlägg är postat.`);
        setUserPosts([...userPosts, data.post]);
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
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button type="submit">Sök</button>
        </div>
      </form>
      {error && <p>{error}</p>}
      {searchedUser && (
        <div className="searched-user">
          <h2>{searchedUser.username}</h2>
          <p>{searchedUser.bio}</p>
          <h3>Inlägg</h3>
          {userPosts.map((post) => (
            <p key={post._id}>{post.text}</p>
          ))}
        </div>
      )}
      <form className="post-form" onSubmit={handlePostSubmit}>
        <label htmlFor="post-input">Skriv ett inlägg:</label>
        <div className="post-container">
          <textarea
            id="post-input"
            value={postText}
            onChange={handlePostTextChange}
          />
          <button type="submit">Posta</button>
        </div>
      </form>
    </div>
  );
}

export default MyFlowPage;
