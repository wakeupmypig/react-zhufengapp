import * as Types from '../action-types/detail'
import {getLessonDetails} from '../../api/detail';

export const getLessonDetail =(id)=>(dispatch,getState)=>{
    getLessonDetails(id).then(detail=>{
        dispatch({
            type:Types.GET_DETAIL,
            detail
        })
    });
};