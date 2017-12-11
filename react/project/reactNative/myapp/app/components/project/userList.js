import React,{Component} from 'react';
import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native';

export default class UserListComponent extends Component{
    constructor(){
        super();
        this.state={
            myList:[]
        }
    }
    componentWillMount=()=>{
         fetch('http://176.202.56.93/ajia_code/data/user/user_list.php')
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
       return <View style={{borderRightWidth:2,borderBottomWidth:4,borderColor:'#fff'}}>
           
       <TouchableOpacity style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around',height:60}}>
            <Image source={{uri:'http://176.202.56.93/ajia_code/'+info.item.avatar}} style={{width:50,height:50, borderRadius:25}}></Image>
            <Text>{info.item.uname}</Text>
            <Text>{info.item.phone}</Text>
            <Text>{info.item.email}</Text>
            <Text>{info.item.user_name}</Text>
            <Text>{info.item.gender==0?'女':'男'}</Text>
        </TouchableOpacity>
        
    </View>
    }
    render(){
        return <View>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',marginTop:20,justifyContent:'space-around'}}>
                <Text style={{fontSize:18}}>头像</Text>   
                <Text style={{fontSize:18}}>用户名</Text>   
                <Text style={{fontSize:18}}>电话</Text>   
                <Text style={{fontSize:18}}>邮箱</Text>   
                <Text style={{fontSize:18}}>姓名</Text>   
                <Text style={{fontSize:18}}>性别</Text>   
            </View>
            <View style={{marginTop:30}}> 
            <FlatList data={this.state.myList} renderItem={this.showItems}></FlatList>
            </View>
        </View>
    }
}