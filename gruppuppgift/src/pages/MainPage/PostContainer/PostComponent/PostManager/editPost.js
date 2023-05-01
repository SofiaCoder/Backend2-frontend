import { serverUrl } from "../../../../..//config";

export async function editPost({ postId, postText }) {
  try {
    const response = await fetch(`${serverUrl}/post`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postID: postId,
        newPostBody: postText,
      }),
    });
    if (response.ok) {
      // Refresh the page after the post has been updated
      window.location.reload();
    } else {
      console.log("Failed to update post");
    }
  } catch (error) {
    console.error("Error updating post:", error);
  }
}
