import { PostComponent } from "./PostComponent/PostComponent";

export function PostContainer({posts}){
  return (
    <div>
    <h3>Posts: </h3>
      {posts.length > 0 ? posts.map(post => <PostComponent post={post}/>) : <p>No posts</p>}
    </div>
  )
}