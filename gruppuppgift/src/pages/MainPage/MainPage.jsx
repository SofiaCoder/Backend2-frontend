import { PostContainer } from "./PostContainer/PostContainer";
import { UserSearch } from "./UserSearch/UserSearch";

export function MainPage(){

  return (<div>
    <h1>Flow</h1>
    <UserSearch/>
    <PostContainer/>
  </div>)
}