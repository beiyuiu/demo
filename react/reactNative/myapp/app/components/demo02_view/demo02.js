import React,{Component} from 'react';
import {Text,View} from 'react-native';

export default class Demo02Component extends Component{
    render(){
        return <View>
                <Text style={{fontSize:30}}>text 1</Text>
                <Text style={{fontSize:15}}>text 2</Text>
            </View>
    }
}