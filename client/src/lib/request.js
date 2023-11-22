const buildOptions = (data) =>{
    const options = {};

    if (data) {
        options.body = JSON.stringify(data)
        options.headers = {
            'content-type':'application/json'
        }
    }

    const token = localStorage.getItem('accessToken');

    if(token){
        options.headers={
            ...options.headers,
            'X-Authorization':token
        }
    }


    return options;
}

const request = async (method,url,data) =>{
    const res = await fetch(url,{
        ...buildOptions(data),
        method,
    })

    if(res.status === 204){
        return {};
    }

    const result = await res.json();

    if(!res.ok) throw result;

    return result;
}


//Partial application
export const get = request.bind(null,'GET')
export const post = request.bind(null,'POST')
export const put = request.bind(null,'PUT')
export const remove = request.bind(null,'DELETE')

