import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar(){
  const loggedinUser = localStorage.getItem('loggedinUser');
  return <nav>
    <Link to='/mainpage'>Home</Link>
    <Link to='/userpage'>Users</Link>
    <Link to={`/profile/${loggedinUser}`}>My Profile</Link>
  </nav>
}