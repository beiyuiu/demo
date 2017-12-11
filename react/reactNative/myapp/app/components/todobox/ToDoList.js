import React,{Component} from 'react';
import {View,FlatList} from 'react-native';
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component{
     constructor(){
        super();
        this.state={
            myList:[]
        }
    }
    componentDidMount(){
        this.setState({
            myList:this.props.myItem
        });
    }
     componentWillReceiveProps(){
         this.setState({
             myList:this.props.myItem
         });
     }
    showItems=(info)=>{
        return <ToDoItem myContent={info.item} funcRemove={this.props.fucDelt} myIndex={info.index}/>
    }
    render(){
        return <FlatList extraData={this.state} data={this.state.myList}
            renderItem={this.showItems}>
         
        </FlatList>
    }
}