import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class Demo13Component extends Component{
    render(){
        return <View style={{alignItems:'center',height:100,backgroundColor:'#e6e6e6e',justifyContent:'center'}}>
            <Text>水平居中</Text>
        </View>
    }
}