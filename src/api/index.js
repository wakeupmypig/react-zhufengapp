import 'es6-promise';
import 'whatwg-fetch';

export function get(url) {
    return fetch(url,{
        headers:{
            accept:'application/json'
        }
    }).then(res=>res.json())
}

export function post(url,data) {
    return fetch(url,{
        method:'post',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())
}