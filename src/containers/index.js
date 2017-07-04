import React,{Component} from 'react';

import Tab from '../components/Tab';
export default class App extends Component{
    render(){
        return (
            <div className="wrap">
                {this.props.children}
                <Tab/>
            </div>
        )
    }
}