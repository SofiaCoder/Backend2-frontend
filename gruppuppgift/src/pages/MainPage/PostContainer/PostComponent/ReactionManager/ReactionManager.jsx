import { likePost } from "./likePost";
import "./reactionManager.css";

export function ReactionManager({post, posts, setPosts}) {
  console.log(posts);
  const loggedinUser = localStorage.getItem('loggedinUser');
  const likes = post.likes;

  const hasLiked = likes.includes(loggedinUser);

  const postId = post._id;

  async function handleLike() {
    await likePost(postId);
    const indexOfPost = posts.findIndex((element) => element._id === post._id);

    const clonedPosts = structuredClone(posts);
    clonedPosts[indexOfPost].likes.push(loggedinUser);
    setPosts(clonedPosts);
  }

  return <div className="reactionManager">
    <span onClick={handleLike}>{hasLiked ? 'Unlike' : 'Like'}</span>
    <span>{likes.length}</span>
    <span>Comment</span>
  </div>
}