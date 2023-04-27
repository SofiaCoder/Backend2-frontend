export function UserComponent({user, currentUser}){
  const isFriend = currentUser.friends.includes(user.username);
return <div className="userComponent">
<span>{user.username}</span>
<button>{isFriend ? 'Unfollow' : 'Follow'}</button>
</div>
}