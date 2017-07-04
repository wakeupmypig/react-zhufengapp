import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less'
export default class Swiper extends Component{
    constructor(){
        super();
        this.state = {
            index:0
        }
    }
    render(){
        let options = {
            continuous: true,
            callback:(index, elem)=>{
                this.setState({
                    index
                });
            }
        }
        return (
            <div className="swiper">
                <ReactSwipe className="carousel" swipeOptions={options}>
                    {this.props.sliders.map((item,index)=>(
                        <div key={index}><img src={item} alt=""/></div>
                    ))}
                </ReactSwipe>
                <div className="dots">
                    {this.props.sliders.map((item,index)=>(
                        <span key={index} className={index==this.state.index?'active':''}></span>
                    ))}
                </div>
            </div>
        );
    }
}