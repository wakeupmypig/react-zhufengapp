import React,{Component} from 'react';
import './index.less'
export default class Introduce extends Component{
    componentWillMount(){
    }
    render(){
        let {lesson,lessonId,local,price,timer,introduce,teacher} = this.props;
        return (
            <div className="lesson-introduce">
                <h3 >{lesson}</h3>
                <div><span>开课时间</span>
                    <p>{timer}</p>
                </div>
                <div><span>上课地点</span>
                    <p>{local}</p>
                </div>
                <div><span>课程价格</span>
                <p><strong>{price}</strong></p></div>
                <hr/>

                <h4><i className="icon-kecheng-copy iconfont"></i>课程介绍</h4>
                <p>{introduce}</p>
                <h4><i className="iconfont icon-jianjie"></i>教师简介</h4>
                <p>{teacher}</p>

            </div>
        )
    }
}
