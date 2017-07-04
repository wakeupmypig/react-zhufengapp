import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom'
export default class LessonList extends Component{
    render(){
        return (

            <div className="lesson-list">
                {this.props.lists.length?
                    this.props.lists.map((item,index)=>{
                        let {url,lesson,price,lessonId} = item;
                        return (
                            <Link to={"/detail/"+lessonId}  key={index}>
                                <div className="lesson-list-item">
                                    <img src={url} alt=""/>
                                    <p>{lesson}</p>
                                    <strong>{price}</strong>
                                </div>
                            </Link>
                        )
                    })
                :'正在加載'}
            </div>

        )
    }
}