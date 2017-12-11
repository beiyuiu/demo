import React,{Component} from 'react';
import {View,TextInput,Button} from 'react-native';

export default class ToDoInput extends Component{
   constructor(){
       super();
       this.state={
           myInput:''
       }
   }
    handleClick=(userInput)=>{
        this.setState({myInput:userInput})
        this.props.funcGet(this.state.myInput);
        this.setState({
            myInput:''
        })
    }
    handleChange=(userInput)=>{
        this.setState({myInput:userInput});
    }
    render(){
        return <View>
            <TextInput placeholder='请输入' onChangeText={this.handleChange} value={this.state.myInput}></TextInput>
            <Button title='add' onPress={this.handleClick}></Button>
            </View>
    }
}