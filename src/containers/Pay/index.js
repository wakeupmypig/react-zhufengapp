import React,{Component} from 'react';
import Header from "../../components/Header/index";
export default class Pay extends Component{
    render(){
        return (
            <div className="container">
                <Header title="支付成功" history={this.props.history}/>
            </div>
        )
    }
}