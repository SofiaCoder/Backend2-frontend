import { Link } from 'react-router-dom'
export function UserComponent({user, currentUser}){
  const isFriend = currentUser.friends.includes(user.username);
return <div className="userComponent">
<Link to={`/profile/${user.username}`}>{user.username}</Link>
<button>{isFriend ? 'Unfollow' : 'Follow'}</button>
</div>
}