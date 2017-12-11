import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Demo03Component extends Component{
    render(){
        return <View>
            <Text style={MyStyle.myHeader}> it is a header</Text>
        </View>
    }
}

const MyStyle = StyleSheet.create({
    myHeader:{
        fontSize:50,
        color:'#f00'
    }
})