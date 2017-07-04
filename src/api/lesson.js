import {get} from './index';
let url = 'http://localhost:3000';
export function getLessonList(user) {
    return get(url+'/api/getLesson/'+user);
}
