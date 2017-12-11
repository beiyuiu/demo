import React,{Component} from 'react';
import {Text,Button,View} from 'react-native';

export default class Demo11Component extends Component{
    loadList(){
        //服务器端获取数据
        fetch('http://176.202.56.56/ajia_code/data/user/logout.php').then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response);
            return response;
        })
    }
    render(){
        return <View>
            <Text>hello</Text>
            <Button onPress={this.loadList} title="loadData"></Button>
        </View>
    }
}