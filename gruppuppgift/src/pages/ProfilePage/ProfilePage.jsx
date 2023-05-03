import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "./getUser";
import { PostComponent } from "../MainPage/PostContainer/PostComponent/PostComponent";
import { NewPost } from "./NewPost/NewPost";
import { Navbar } from "../../components/Navbar/Navbar";

export function ProfilePage() {
  const { username } = useParams();
  const loggedinUser = localStorage.getItem("loggedinUser");
  const isMyPage = username === loggedinUser;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAndSetUser() {
      const { posts } = await getUser(username);
      setPosts(posts || []);
    }
    getAndSetUser();
  }, [username]);

  return (
    <div>
      <Navbar />
      <h1>{username}'s profile</h1>
      {isMyPage && <NewPost posts={posts} setPosts={setPosts} />}
      <h3>Posts:</h3>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <PostComponent
            post={post}
            posts={posts}
            setPosts={setPosts}
            key={post._id}
          />
        ))
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
}
