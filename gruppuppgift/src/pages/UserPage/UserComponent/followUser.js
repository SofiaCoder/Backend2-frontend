import { serverUrl } from "../../../config";

export async function followUser(username){
    const body = JSON.stringify({
        friendname: username
    })

    await fetch(`${serverUrl}/friend/`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json'
        },
        body
    })
}

