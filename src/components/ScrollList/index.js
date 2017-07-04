import React,{Component} from 'react';
export default class ScrollList extends Component{
    render(){
        return (
            <div>
                {this.props.children}
                {this.props.loading?'正在加载':<div>获取更多</div>}
            </div>
        )
    }
    //绑定数据
    componentWillReceiveProps (nextProps) {
        this.tryToBindScrollEvent(nextProps.element);
    }
    elementScrollHandlerBind (e) {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            let { scrollHeight, clientHeight, scrollTop } = e.target;
            let { loading, onLoad, hasMore } = this.props;
            console.log('loading:', loading, 'hasMore', hasMore);
            if ( clientHeight + scrollTop + 20 >= scrollHeight && !loading && hasMore ) {
                onLoad();
            }
        },20);
    }
    tryToBindScrollEvent(element){
        element&&element.addEventListener('scroll', this.elementScrollHandlerBind.bind(this), false);
    }
    componentDidMount () {
        this.tryToBindScrollEvent(this.props.element);
    }
    componentWillUnmount () {
        let { element } = this.props;
        if ( element ) {
            clearTimeout(this.timer)
            element.removeEventListener('scroll', this.elementScrollHandlerBind, false);
        }
    }
}