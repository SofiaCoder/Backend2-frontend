import { serverUrl } from "../../../config";

export async function postPost(postBody) {
  const body = JSON.stringify({postBody});
  const response = await fetch(`${serverUrl}/post`, {
    method: 'POST',
    credentials: 'include',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  return data;
}