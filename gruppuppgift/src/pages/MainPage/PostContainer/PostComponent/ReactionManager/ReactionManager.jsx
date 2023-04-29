import { useEffect, useState } from "react";
import { commentPost } from "./commentPost";
import { likePost } from "./likePost";
import "./reactionManager.css";

export function ReactionManager({post, posts, setPosts}) {
  const [commentClicked, setCommentClicked] = useState(false)
  const [comment, setComment] = useState("")
  const [allComments, setAllComments] = useState([])
  const loggedinUser = localStorage.getItem('loggedinUser');
  const likes = post.likes;
  const comments = post.comments;

  useEffect(() => {
    setAllComments(comments)
  }, [])
 

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

  async function handleComment(){
    const respons = await commentPost(comment, postId);
    const newComment = await respons.json();

    const indexOfPost = posts.findIndex((element) => element._id === postId);
    const clonedPosts = structuredClone(posts);
    const comments = clonedPosts[indexOfPost].comments;
    comments.push(newComment);
    setPosts(clonedPosts);
}


  return <div className="reactionManager">
    <div className="reactionContainer">
      <span onClick={handleLike}>{hasLiked ? 'Unlike' : 'Like'}</span>
      <span>{likes.length}</span>
      <span onClick={() => {commentClicked ? setCommentClicked(false) : setCommentClicked(true)}}>Comment</span>
    </div>
    <div className="commentManager" style={commentClicked ? {visibility: 'visible'} : {visibility: 'hidden'}}>
      <textarea value={comment} onChange={(e)=> setComment(e.target.value)}></textarea>
      <button onClick={() => handleComment()}>Send</button>
    </div>
    <div className="commentContainer">
      {allComments.map((comment, index) => (
        <div key={index}>
          <p><strong>{comment.username}</strong></p>
          <p>{comment.commentBody}</p>
          <p>{comment.date}</p>
        </div>
      ))}
    </div>
  </div>
}