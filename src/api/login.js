import {post} from './index';
let url = 'http://localhost:3000';
export function login(data) {
    return post(url+'/api/login',data);
}
