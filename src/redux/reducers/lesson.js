import * as Types from '../action-types/lesson';
let lessonList = {
    list:[]
};
export function lesson(state=lessonList,action) {
    switch (action.type){
        case Types.GET_LESSON_LIST:
            return {...state,...{list:action.lessons}};
    }
    return state;
}