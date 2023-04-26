import { useState } from "react";
import { PostContainer } from "./PostContainer/PostContainer";
import { UserSearch } from "./UserSearch/UserSearch";

export function MainPage(){

  const [posts, setPosts] = useState([{username: 'Metin', post: 'My test post', date: new Date().toDateString()}]);
  return (<div>
    <h1>Flow</h1>
    <UserSearch/>
    <PostContainer posts={posts}/>
  </div>)
}