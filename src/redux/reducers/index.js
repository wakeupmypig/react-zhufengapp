import {home} from './home';
import {userInfo} from './userInfo';
import {lesson} from './lesson';
import {detail} from './detail';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
export default combineReducers({
    home,
    userInfo,
    lesson,
    detail,
    router:routerReducer //注入router Reducer
});