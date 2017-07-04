import React,{Component} from 'react';
import {getSliders} from '../../api/home';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/home';
import Swiper from "../../components/Swiper/index";
import './index.less'
import LessonList from "../../components/LessionList/index";
import HomeHeader from '../../components/HomeHeader';
import ScrollList from "../../components/ScrollList/index";
@connect((state)=>({
    currentLesson:state.home.currentLesson,
    sliders:state.home.sliders,
    lessons:state.home.lessons
}),{...actions})

export default class Home extends Component{
    constructor(){
        super();
    }
    chooseHandler(val){
       this.props.setLesson(val);
       //设置当前城市 再次获取数据
        this.refs.scroll.scrollTop = 0; //回到顶部刷新数据
        this.props.getLessonType();
    }
    render(){
        let {hasMore,loading} = this.props.lessons;
        return (
            <div style={{height:'100%'}}>
                <HomeHeader chooseLesson={this.chooseHandler.bind(this)}/>

                <div className="home wrap-page" ref="scroll">

                    {this.props.sliders.length>0?<Swiper sliders={this.props.sliders}/>:''}
                    <h3><i className="iconfont icon-book"></i>全部課程</h3>
                    <ScrollList
                        element={this.refs.scroll}
                        onLoad={this.props.getLesson}
                        hasMore={hasMore}
                        loading={loading}
                    >
                    <LessonList lists={this.props.lessons.data}/>
                    </ScrollList>
                </div>

            </div>
        )
    }
    componentDidMount(){
        //获取轮播图
        this.props.getSliderList();

        //获取数据
        this.props.getLesson(this.props.currentLesson);
    }
}