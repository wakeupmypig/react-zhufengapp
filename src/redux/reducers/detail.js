import * as Types from '../action-types/detail';
let initState = {
    detail:{}
};
export function detail(state=initState,action) {
    switch (action.type){
        case Types.GET_DETAIL:
            return {...state,...action.detail};
    }
    return state;
}