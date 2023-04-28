import { useState } from "react"
import { postPost } from "./postPost";

export function NewPost({posts, setPosts}) {
  const [postBody, setPostBody] = useState('');
  async function handleCreate(){
    const createdPost = await postPost(postBody);

    const clonedPosts = structuredClone(posts);
    clonedPosts.push(createdPost);
    setPosts(clonedPosts);

  }
  return <div>
    <p>Create new post:</p>
    <input type="text" value={postBody} onChange={(e) => setPostBody(e.currentTarget.value)}/>
    <button onClick={handleCreate}>Create</button>
  </div>
}