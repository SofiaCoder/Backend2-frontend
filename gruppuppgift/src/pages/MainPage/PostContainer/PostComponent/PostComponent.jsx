import { useState } from "react";
import "./postComponent.css";
import { PostManager } from "./PostManager/PostManager";

export function PostComponent({ post, posts, setPosts }) {
    const loggedinUser = localStorage.getItem("loggedinUser");
    const [isEditable, setIsEditable] = useState(false);

    const isOwner = loggedinUser === post.username;
    return (
        <div className="postComponent">
            <p className="postUsername">{post.username}</p>
            <p className="postPost" contentEditable={isEditable}>
                {post.post}
            </p>
            <p className="postDate">{post.date}</p>
            {isOwner && <PostManager isEditable={isEditable} setIsEditable={setIsEditable} posts={posts} setPosts={setPosts} postId={post._id} />}
        </div>
    );
}
