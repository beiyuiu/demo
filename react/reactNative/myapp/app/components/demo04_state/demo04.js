import React,{Component} from 'react';
import {Text} from 'react-native';

export default class Demo04Component extends Component{
    //构造函数，在类被调用时将自动触发
    constructor(){
        super();
        //在构造函数中，完成状态初始化
        this.state = {
            count:100
        }
    }

    componentDidMount(){
        console.log('挂载完毕');
        setInterval(()=>{
            var nowCount = this.state.count;
            nowCount++;
            this.setState({count:nowCount},function(){
                console.log(this.state.count);
            });
        },1000)
    }
    //在状态中的count为0时，在text显示‘计数未启动’，否则显示count的值
    render(){
        return <Text>
            {
                this.state.count==0?'计数未启动':this.state.count
            }
        </Text>
    }
}