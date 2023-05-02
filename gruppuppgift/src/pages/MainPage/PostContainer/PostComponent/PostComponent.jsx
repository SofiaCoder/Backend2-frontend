import { useState } from "react";
import "./postComponent.css";
import { PostManager } from "./PostManager/PostManager";
import { ReactionManager } from "./ReactionManager/ReactionManager";

export function PostComponent({ post, posts, setPosts }) {
    const loggedinUser = localStorage.getItem("loggedinUser");

    const [postText, setPostText] = useState(post.post);
    const [isEditable, setIsEditable] = useState(false);

    const isOwner = loggedinUser === post.username;
    return (
        <div className="postComponent">
            <p className="postUsername">{post.username}</p>
            <p className="postPost" contentEditable={isEditable} onInput={(e) => setPostText(e.currentTarget.innerText)}>
                {postText}
            </p>
            <p className="postDate">{post.date}</p>
            {isOwner && (
                <PostManager
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    posts={posts}
                    setPosts={setPosts}
                    postId={post._id}
                    postText={postText}
                />
            )}
            <ReactionManager post={post} posts={posts} setPosts={setPosts}/>
        </div>
    );
}
