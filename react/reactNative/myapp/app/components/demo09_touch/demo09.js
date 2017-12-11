import React,{Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

export default class Demo09Component extends Component{
    render(){
        return <TouchableOpacity>
            <Text>点按效果</Text>
        </TouchableOpacity>
    }
}