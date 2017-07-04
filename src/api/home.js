import {get} from './index';
let url = 'http://localhost:3000';
export function getSliders() {
    return get(url+'/api/getSliders');
}
export function getLessons(type,limit,offset) {
    return get(url+'/api/getLessons/'+type+'/'+limit+'/'+offset);
}