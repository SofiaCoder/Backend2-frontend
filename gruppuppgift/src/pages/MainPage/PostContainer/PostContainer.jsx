import { useState } from "react";
import { PostComponent } from "./PostComponent/PostComponent";

export function PostContainer(){
  const [posts, setPosts] = useState([{username: 'Metin', post: 'My test post', date: new Date().toDateString(), _id: '1x213'}]);
  return (
    <div>
    <h3>Posts: </h3>
      {posts.length > 0 ? posts.map((post, index) => <PostComponent post={post} posts={posts} setPosts={setPosts} key={index}/>) : <p>No posts</p>}
    </div>
  )
}