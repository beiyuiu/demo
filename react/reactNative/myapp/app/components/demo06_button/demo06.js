import React,{Component} from 'react';
import {View,Button,Text} from 'react-native';

export default class Demo06Component extends Component{
    constructor(){
        super();
        this.state = {
            opacity:0
        }
    }
    handlePress=()=>{
        setInterval(()=>{
            var nowOpacity = this.state.opacity;
            nowOpacity+=0.1;
            this.setState({opacity:nowOpacity});
            if(nowOpacity>1){
                this.setState({opacity:0});
            }
        },500)
    }
    render(){
        return <View>
            <Text style={{opacity:this.state.opacity}}>show time{this.props.myTip}</Text>
            <Button onPress={this.handlePress} title="clickMe"></Button>
            </View>
    }
}