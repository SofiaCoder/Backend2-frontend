import { likePost } from "./likePost";
import "./reactionManager.css";

export function ReactionManager({post, posts, setPosts}) {
  const loggedinUser = localStorage.getItem('loggedinUser');
  const likes = post.likes;

  const hasLiked = likes.includes(loggedinUser);

  const postId = post._id;

  async function handleLike() {
    await likePost(postId);
    const indexOfPost = posts.findIndex((element) => element._id === post._id);

    const clonedPosts = structuredClone(posts);
    const likes = clonedPosts[indexOfPost].likes;

    const likeIndex = likes.indexOf(loggedinUser);

    if (likeIndex === -1) {
      likes.push(loggedinUser);
    } else {
      likes.splice(likeIndex, 1);
    }

    setPosts(clonedPosts);
  }

  return <div className="reactionManager">
    <span onClick={handleLike}>{hasLiked ? 'Unlike' : 'Like'}</span>
    <span>{likes.length}</span>
    <span>Comment</span>
  </div>
}