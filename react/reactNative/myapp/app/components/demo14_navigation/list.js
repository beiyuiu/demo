import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';

export default class ListComponent extends Component{
    constructor(){
        super();
        this.state={
            myList:[100,200,300]
        }
    }
    handlePress=(index)=>{
        console.log(this.props);
        this.props.navigation.navigate('myDetail',{msg:index});
    }
    showItem=(info)=>{
        return <Text onPress={()=>{this.handlePress(info.index)}}>{info.item}</Text>
    }
    render(){
        return <FlatList data={this.state.myList} renderItem={this.showItem}></FlatList>
    }
}