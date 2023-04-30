import { Link } from 'react-router-dom'
import { followUser } from './followUser';

export function UserComponent({user, currentUser}){
  const isFriend = currentUser.friends.includes(user.username);
return <div className="userComponent">
  <Link to={`/profile/${user.username}`}>{user.username}</Link>
  <button onClick={() => {followUser(user.username)}}>{isFriend ? 'Unfollow' : 'Follow'}</button>
</div>
}