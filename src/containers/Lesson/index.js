import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/lesson';
import './index.less'
@connect((state)=>({
    userInfo:state.userInfo,
    lessonList:state.lesson
}),{...action})
export default class Lession extends Component{
    componentDidMount(){
        this.props.getLesson()
    }
    render(){
        let {nickName} = this.props.userInfo;
        console.log(this.props.lessonList);
        let {list:lessonList} = this.props.lessonList;
        return (
            <div className="my-lesson-list">
                {lessonList.length>0?lessonList.map((item,index)=>{
                    let {url,lessonName,long,timer,location} = item;
                    return <div key={index} className="lesson-list-item">
                        <h3>{lessonName}</h3>
                        <div>
                            <img src={url} alt="" width={'120px'} height={'82px'}/>
                            <div>
                                <p>开课时间 :{timer}</p>
                                <p>上课地点:{location}</p>
                                <p>时长:{long}</p>
                            </div>
                        </div>
                    </div>
                }):'暂无课程'}
            </div>
        )
    }
}