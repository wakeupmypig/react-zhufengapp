import React,{Component} from 'react';
import './index.less'
export default class Header extends Component{
    render(){
        return (
            <div className="header">
                <i className="iconfont icon-fanhui back" onClick={this.back.bind(this)}></i>
                {this.props.title}
            </div>
        )
    }
    back(){
        this.props.history.go(-1);
    }
}