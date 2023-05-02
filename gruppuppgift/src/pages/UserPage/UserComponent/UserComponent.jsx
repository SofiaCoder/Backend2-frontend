import { useState } from 'react';
import { Link } from 'react-router-dom'
import { followUser } from './followUser';

export function UserComponent({user, currentUser}){
  const username = user.username
  const [isFriend, setIsFriend] = useState(currentUser.friends.includes(username))

  const handleFollow = () => {
    followUser(username)
    setIsFriend(currentValue => !currentValue)
  }
  
return <div className="userComponent">
  <Link to={`/profile/${username}`}>{username}</Link>
  <button onClick={() => {handleFollow()}}>{isFriend ? 'Unfollow' : 'Follow'}</button>
</div>
}