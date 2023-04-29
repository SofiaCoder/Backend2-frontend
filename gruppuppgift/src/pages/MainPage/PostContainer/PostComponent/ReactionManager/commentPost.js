import { serverUrl } from "../../../../../config";

export async function commentPost(comment, postId) {
    const body = JSON.stringify({
        commentBody: comment, postID: postId
    });
    
    const respons = fetch(`${serverUrl}/post/comment`, {
        method: 'POST',
        credentials: 'include',
        body,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return respons
}