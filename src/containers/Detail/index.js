import React,{Component} from 'react';
import Header from "../../components/Header/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/detail';
import './index.less'
import Introduce from "./subpage/introduce";
import Dir from "./subpage/dir";
import {Link} from 'react-router-dom'
@connect(state=>({
    ...state.detail
}),action)
export default class Detail extends Component{
    constructor(){
        super();
        this.state = {type:'introduce'}
    }
    componentWillMount(){
        this.props.getLessonDetail(this.props.match.params.id)
    }
    changeTab(val){
        this.setState({
            type:val
        })
    }
    render(){
        let {url} = this.props;
        let flag = this.state.type==='introduce'
        return (
            <div className="container detail">
                <Header title="课程详情" history={this.props.history}/>
                <img src={url} alt=""/>
                <div className="tab-cart" >
                    <a className={flag?'active':''} onClick={this.changeTab.bind(this,'introduce')}>课程介绍</a>

                    <a className={!flag?'active':''} onClick={this.changeTab.bind(this,'aaa')}>课程目录</a>
                </div>
                <div className="detail-content">
                    {flag?<Introduce {...this.props}/>:
                    <Dir/>}
                </div>
                <Link to={{pathname:'/pay',state:{referrer:'/detail/'+this.props.match.params.id}}} className="enroll">报名</Link>
            </div>
        )
    }
}