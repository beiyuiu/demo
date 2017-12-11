import React,{Component} from 'react';
import {View,Text,TextInput} from 'react-native';

export default class Demo12Component extends  Component{
    constructor(){
        super();
        this.state={
            myValue:'123'
        }
    }
    handleChange(myInput){
        console.log(myInput);
    }
    modifyState=(myInput)=>{
        this.setState({myValue:myInput});
    }
    render(){
        return <View>
            <TextInput placeholder='请输入' onChangeText={this.handleChange}></TextInput>
            <TextInput value={this.state.myValue} onChangeText={this.modifyState}></TextInput>
        </View>
    }
}