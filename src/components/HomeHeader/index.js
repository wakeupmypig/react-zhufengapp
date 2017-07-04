import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.less';

import logoImg from './logo.png';
export default class HomeHeader extends Component{
    constructor(){
        super();
        this.state = {
            isShow:true
        }
    }
    changeShow(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    choose(e){
        this.props.chooseLesson(e.target.innerText);
        this.changeShow();
    }
    render(){
        return (
            <div className="home-header">
                <div className="header-heading">
                    <img src={logoImg} width={'103px'} height={'31px'} className="logo"/>
                    <div onClick={this.changeShow.bind(this)}>
                        {this.state.isShow
                            ?
                            <i className="iconfont icon-uilist list-menu"></i>:
                            <i className="iconfont icon-guanbi list-menu"></i>}
                    </div>

                </div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {!this.state.isShow
                        ?
                        <nav className="header-list" onClick={this.choose.bind(this)}>
                            <li>Node課程培訓</li>
                            <li>HTML5培訓課程</li>
                            <li>視頻教程</li>
                            <li>文檔課件</li>
                        </nav>:''}
                </ReactCSSTransitionGroup>

            </div>
        )
    }
}