import React,{Component} from 'react';
import {Text,View,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native';

export default class CheckComponent extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    handlePress=()=>{
        setInterval(()=>{
            var nowCount = this.state.count;
            nowCount++;
            if(nowCount>3){return}
            this.setState({count:nowCount});
        },1000);
        totalPrice = Math.floor(Math.random()*1500);
        console.log("随机数"+totalPrice);
        this.props.navigation.navigate('myDetail',{msg:totalPrice});
    }
   
    render(){
        return <View> 
            <TouchableOpacity onPress={this.handlePress}>
            <Text>{'去支付'}</Text>
            </TouchableOpacity>
            {this.state.count<3 && <View style={{alignItems:'center'}}>
                <ActivityIndicator></ActivityIndicator>
                <Text style={{color:'#ff0000'}}>Loding...</Text>
            </View>
            }
        </View>
    }
}