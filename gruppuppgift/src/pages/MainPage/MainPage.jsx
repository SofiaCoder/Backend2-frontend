import { Navbar } from "../../components/Navbar/Navbar";
import { PostContainer } from "./PostContainer/PostContainer";
import { UserSearch } from "./UserSearch/UserSearch";

export function MainPage(){

  return (<div>
    <Navbar/>
    <h1>Flow</h1>
    <UserSearch/>
    <PostContainer/>
  </div>)
}