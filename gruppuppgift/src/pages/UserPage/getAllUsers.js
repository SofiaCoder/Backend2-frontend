import { serverUrl } from "../../config";

export async function getAllUsers(){
  const response = await fetch(`${serverUrl}/friend`, {
    credentials: 'include'
  });

  const data = await response.json();
  return data;
}