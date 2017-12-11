import React,{Component} from 'react';
import {FlatList,View,Text} from 'react-native';

export default class Demo08Component extends Component{
    constructor(){
        super();
        this.state={
            myList:[125,7,548]
        }
    }
    //渲染列表项renderItem属性对应方法带有参数（对象）包含item（data属性对应集合中元素的内容）、index（下标）
    showItems=(info)=>{
        console.log(info);
        return <Text onPress={()=>this.handlePress(info.index)}>{info.item}</Text>
    }
    //为列表项添加点击事件
    handlePress(index){
        alert('Clicked'+index);
    }
    render(){
        return <View style={{height:150}}> 
        <FlatList data={this.state.myList}
            renderItem={this.showItems}>
           
        </FlatList>
        </View>
    }
}