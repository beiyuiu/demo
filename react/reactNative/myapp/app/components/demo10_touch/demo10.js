import React,{Component} from 'react';
import {Text,FlatList,View,TouchableOpacity} from 'react-native';

export default class Demo10Component extends Component{
    constructor(){
        super();
        this.state={
            myList:[]
        }
    }
    componentDidMount(){
        var nowList = this.state.myList;
        nowList=[545,578,5748,54];
        this.setState({myList:nowList})
    }
    showItems=(info)=>{
        
        return <TouchableOpacity> 
            <Text>{info.item}</Text>
        </TouchableOpacity>
    }
    render(){
        return <View style={{height:200}}>
           
        <FlatList data={this.state.myList}
            renderItem={this.showItems}>
           
        </FlatList>
       
        </View>
    }
}