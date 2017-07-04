import {get} from './index';
let url = 'http://localhost:3000';
export function getSliders() {
    return get(url+'/api/getSliders');
}
export function getLessonDetails(id) {
    return get(url+'/api/detail/'+id);
}