import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
@connect(state=>({
    userInfo:state.userInfo
}))
export default class Profile extends Component{
    render(){
        let nickName = this.props.userInfo.nickName;
        return (
            <div className="profile">
                <div className="login_bg">
                    <div className="avatar"></div>
                    {nickName.length?
                        <a className="profile_btn">{nickName}</a>:
                        <Link to={{pathname:'/login',state:{referrer:'/profile'}}} className="profile_btn">登录</Link>}

                </div>
                <ul className="profile-list">
                    <li>
                        <Link to={'/question'}>
                        <span>
                            <i className="iconfont icon-common-changjianwenti-copy"></i>
                            常见问题
                        </span>
                        <i className="iconfont icon-renturn"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/profile'}>
                        <span>
                            <i className="iconfont icon-guanyuwomen" ></i>
                            关于我们
                        </span>
                        <i className="iconfont icon-renturn"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/update-password'}>
                        <span>
                            <i className="iconfont icon-xiugaimima"></i>
                            修改密码
                        </span>
                        <i className="iconfont icon-renturn"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}