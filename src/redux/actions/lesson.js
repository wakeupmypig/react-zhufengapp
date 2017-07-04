import * as Types from '../action-types/lesson'
import {getLessonList} from '../../api/lesson';
let url = 'http://localhost:3000';

export const getLesson =()=>(dispatch,getState)=>{
    getLessonList(getState().userInfo.nickName).then(lessons=>{
        console.log(lessons);
        dispatch({
            type:Types.GET_LESSON_LIST,
            lessons:lessons.lessonList
        })
    });
};