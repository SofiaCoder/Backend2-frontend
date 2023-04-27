import { serverUrl } from "../../../../../config";

export async function deletePost(postID){
  const body = JSON.stringify({postID});

  const response = await fetch(`${serverUrl}/post`, {
    method: 'DELETE',
    credentials: 'include',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.text();
}