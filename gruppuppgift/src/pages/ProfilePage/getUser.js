import { serverUrl } from "../../config";

export async function getUser(username){
  const response = await fetch(`${serverUrl}/user/${username}`, {
    credentials: 'include'
  });

  const user = await response.json();

  return [user, response.status];
}