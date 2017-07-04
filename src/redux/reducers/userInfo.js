import * as Types from '../action-types/userInfo';
let initState = {
    nickName:localStorage.getItem('nickName')||''
};
export function userInfo(state=initState,action) {
    switch (action.type){
        case Types.SET_USER_INFO:
             localStorage.setItem('nickName',action.user.nickName);
             return {...state,...action.user};
    }
    return state;
}