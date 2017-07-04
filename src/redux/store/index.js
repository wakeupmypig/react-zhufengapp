import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers';


//创建路由中间件
import createHistory from 'history/createHashHistory';
const history = createHistory();
import {routerMiddleware} from 'react-router-redux'
const rMiddleware = routerMiddleware(history);

//异步中间件
import reduxThunk  from 'redux-thunk';
let middleWare = [rMiddleware,reduxThunk];


export default createStore(reducers,
    applyMiddleware(...middleWare)
);