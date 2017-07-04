import * as Types from '../action-types/home';
let initState = {
    currentLesson:'all',
    sliders:[],
    lessons:{
        hasMore:true, //是否有更多
        offset:0,//偏移量
        limit:10,//限制10条
        loading:false,//是否正在加载
        data:[]
    },
};
export function home(state=initState,action) {
    switch (action.type){
        case Types.GET_SLIDER:
            state.sliders = action.sliders;
            return {...state};
        case Types.GET_LESSON:
            return Object.assign({},state,{
                lessons:{
                    data:[...state.lessons.data,...action.lessons],
                    hasMore:action.hasMore,
                    offset:action.lessons.length+state.lessons.offset,
                    loading:state.lessons.loading,
                    limit:state.lessons.limit
                }
            });
        case Types.SET_CURRENT_LESSON:
            return {...state,...{currentLesson:action.lesson}};
        case Types.GET_LESSON_TYPE:
            return Object.assign({},state,{
                lessons:{
                    data:action.lessons,
                    hasMore:action.hasMore,
                    offset:action.lessons.length+state.lessons.offset,
                    loading:state.lessons.loading,
                    limit:state.lessons.limit
                }
            });
        case Types.CHANGE_LOADING:
            let newState = JSON.parse(JSON.stringify(state));
            newState.lessons.loading = action.loading;
            return newState;
    }
    return state;
}