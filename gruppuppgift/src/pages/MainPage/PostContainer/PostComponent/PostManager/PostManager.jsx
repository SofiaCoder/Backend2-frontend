import { deletePost } from "./deletePost";
import "./postManager.css";

export function PostManager({ isEditable, setIsEditable, posts, setPosts, postId, postText }) {
    function handleSave() {
        setIsEditable(false);
    }

    function handleEdit() {
        setIsEditable(true);
    }

    async function handleDelete() {
        await deletePost(postId);

        const clonedPosts = structuredClone(posts);
        const removalIndex = clonedPosts.findIndex((post) => post._id === postId);
        clonedPosts.splice(removalIndex, 1);
        setPosts(clonedPosts);
    }
    return (
        <div className="postManager">
            {isEditable ? <span onClick={handleSave}>Save</span> : <span onClick={handleEdit}> Edit</span>}

            <span onClick={handleDelete}>Delete</span>
        </div>
    );
}
