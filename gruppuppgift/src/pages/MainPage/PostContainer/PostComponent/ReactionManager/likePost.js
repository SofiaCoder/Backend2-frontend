import { serverUrl } from "../../../../../config";

export async function likePost(postID){
  const body = JSON.stringify({
    postID: postID
  });

  const response = await fetch(`${serverUrl}/post/like`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  });

  console.log(response.status);
}