export const request = async (method,url,data) =>{
    const res = await fetch(url,{
        method,
    })

    const result = await res.json();

    return result;
}