import React,{Component} from 'react';
import {View,Text,FlatList,Image,TouchableOpacity,Button} from 'react-native';

export default class ProductListComponent extends Component{
    constructor(){
        super();
        this.state={
            myList:[]
        }
    }
    handleClick=(index)=>{
       var count = this.state.myList[index].sold_count;
       alert("已售"+count);
    }
    componentWillMount=()=>{
         fetch('http://176.202.56.93/ajia_code/data/product/list.php')
        .then((response)=>response.json())
        .then((response)=>{
            var nowList = response.data;
            for(var i=0;i<nowList.length;i++){
                nowList[i].key=i;
            }
            this.setState({
                myList:nowList
            })
        });
    }
    showItems=(info)=>{
       return <View> 
       <TouchableOpacity style={{flex:1,flexDirection:'row',alignItems:'center'}} onPress={()=>this.handleClick(info.index)}>
            <Image source={{uri:'http://176.202.56.93/ajia_code/'+info.item.pic}} style={{width:50,height:50, borderRadius:25}}></Image>
            <Text>{info.item.title}</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
    </View>
    }
    render(){
        return <View>
            <FlatList data={this.state.myList} renderItem={this.showItems}></FlatList>
        </View>
    }
}