import { useState } from "react"

export function UserSearch(){
  const [searchValue, setSearchValue] = useState('');
  const [foundUser, setFoundUser] = useState(null);

  function handleSearch(event){
    event.preventDefault();
  }
  return <form onSubmit={handleSearch}>
    <label htmlFor="userSearch">Search for user</label>
    <input type="text" id="userSearch" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
    <button>Search</button>

    {foundUser === false && <p>No user found</p>}
  </form>
}