const baseUrl = 'http://localhost:3030/jsonstore'

export const create = async (gameData) => {

    const res = await fetch(`${baseUrl}/games`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(gameData)
    });

    const result = await res.json()

    return result;
}