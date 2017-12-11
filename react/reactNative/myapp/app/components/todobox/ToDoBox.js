import React,{Component} from 'react';
import {View} from 'react-native';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

export default class ToDoBox extends Component{
     constructor(){
        super();
        this.state={
            list:[]
        }
    }
    add=(value)=>{
        var nowList = this.state.list;
            nowList.push(value);
            this.setState({
                list:nowList
            },()=>{
                console.log(this.state.list);
            })
    }
    delete=(index)=>{
        var nowList = this.state.list;
            
            nowList.splice(index,1);
            this.setState({list:nowList},()=>{
                console.log(this.state.list);
            });
    }
    render(){
        return <View>
            <ToDoInput funcGet={this.add}/>
            <ToDoList fucDelt={this.delete} myItem={this.state.list}/>
        </View>
    }
}