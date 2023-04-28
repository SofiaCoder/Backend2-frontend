import { serverUrl } from "../../../config";

export async function getFriendsPosts() {
  const response = await fetch(`${serverUrl}/friend/posts`, {
    method: 'GET',
    credentials: 'include'
  });

  const data = await response.json();

  return data;
}