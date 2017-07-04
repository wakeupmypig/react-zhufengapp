//获取列表
import * as Types from '../action-types/home'
import {getSliders,getLessons} from '../../api/home';

export const getSliderList =()=>(dispatch,getState)=>{
    getSliders().then(sliders=>{
        dispatch({
            type:Types.GET_SLIDER,
            sliders
        })
    });
};
export const setLesson=(lesson)=>{
    return {
        type:Types.SET_CURRENT_LESSON,
        lesson
    }
};
export const getLessonType =()=>(dispatch,getState)=>{
    let {limit} = getState().home.lessons;
    getLessons(getState().home.currentLesson,limit,0).then(lessons=>{
        dispatch({
            type:Types.GET_LESSON_TYPE,
            ...lessons
        })
    });
};
export const getLesson =()=>(dispatch,getState)=>{
    let {limit,offset,hasMore} = getState().home.lessons;
    if(!hasMore) return;
    dispatch({
        type:Types.CHANGE_LOADING,//更改状态
        loading:true
    })
    getLessons(getState().home.currentLesson,limit,offset).then(lessons=>{
        dispatch({
            type:Types.CHANGE_LOADING,//更改加载完成
            loading:false
        })
        dispatch({
            type:Types.GET_LESSON,
            ...lessons
        })
    });
};
