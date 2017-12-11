import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';

export default class MainComponent extends Component{
    handleClick=()=>{
        this.props.navigation.navigate('myProductList');
    }
    handleJump=()=>{
        this.props.navigation.navigate('myUserList');
    }
    render(){
        return <View style={{flex:1,backgroundColor:'#ffffff'}}>
            <View style={{height:310}}>
                <View style={{flex:1,flexDirection: 'row'}}>
                    <View style={{width:200,height:150,margin:5,backgroundColor:'#afdee4',flexDirection: 'row',flex:0.5,justifyContent:'center',alignItems: 'center'}}>
                        <Text style={{fontSize:30,color:'#ff0000'}}>200</Text>
                        <Text>当日PC端PV量</Text>
                    </View>
                    <View style={{width:200,height:150,margin:5,backgroundColor:'#afdee4',flexDirection: 'row',flex:0.5,justifyContent:'center',alignItems: 'center'}}>
                        <Text style={{fontSize:30,color:'#00ff00'}}>230</Text>
                        <Text>移动端PV量</Text>
                    </View>
                </View>
                <View style={{flex:1,flexDirection: 'row'}}>
                    <View style={{width:200,height:150,margin:5,backgroundColor:'#afdee4',flexDirection: 'row',flex:0.5,justifyContent:'center',alignItems: 'center'}}>
                        <Text style={{fontSize:30,color:'#ff0000'}}>1020</Text>
                        <Text>已完成订单总数</Text>
                    </View>
                    <View style={{width:200,height:150,margin:5,backgroundColor:'#afdee4',flexDirection: 'row',flex:0.5,justifyContent:'center',alignItems: 'center'}}>
                        <Text style={{fontSize:30,color:'#00ff00'}}>2390</Text>
                        <Text>当日App下载量</Text>
                    </View>
                </View>
            </View>
            
            <View style={{flex:1,backgroundColor:'#afdee4',marginTop:10}}>
                <View style={{flexDirection: 'row',flex:0.5,justifyContent:'space-around'}}>
                    <View style={{justifyContent:'center',alignItems: 'center'}}>
                        <Image source={require('../../img/order.png')}></Image>
                            <Text>订单管理</Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems: 'center'}}>
                            <Image source={require('../../img/user.png')}></Image>
                            <Text onPress={this.handleJump}>用户管理</Text>
                        </View>
                </View>
                
                <View style={{flexDirection: 'row',flex:0.5,justifyContent:'space-around'}}>
                    <View style={{justifyContent:'center',alignItems: 'center'}} >
                        <Image source={require('../../img/product.png')}></Image>
                        <Text onPress={this.handleClick}>商品管理</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems: 'center'}}>
                        <Image source={require('../../img/setting.png')}></Image>
                        <Text>设置</Text>
                    </View>
                </View>
            </View>
        </View>
    }
}