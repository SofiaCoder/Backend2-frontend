import { useEffect, useState } from "react";
import { PostComponent } from "./PostComponent/PostComponent";
import { getFriendsPosts } from "./getFriendsPosts";

export function PostContainer() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getFriends() {
            const fetchedPosts = await getFriendsPosts()
            setPosts(fetchedPosts);
        }
        getFriends();
    }, [])

    return (
        <div>
            <h3>Posts: </h3>
            {posts.length > 0 ? (
                posts.map((post) => <PostComponent post={post} posts={posts} setPosts={setPosts} key={post._id} />)
            ) : (
                <p>No posts</p>
            )}
        </div>
    );
}

