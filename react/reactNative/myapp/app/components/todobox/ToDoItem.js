import React,{Component} from 'react';
import {View,Button,Text} from 'react-native';

export default class ToDoItem extends Component{
    handleDelet=()=>{
        this.props.funcRemove(this.props.myIndex);
    }
    render(){
        return <View>
                <Text>{this.props.myContent}</Text>
                <Button title='delete' onPress={this.handleDelet}></Button>
            </View>
    }
}