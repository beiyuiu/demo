import React,{Component} from 'react';
import {Image,View} from 'react-native';

export default class Demo07Component extends Component{
    render(){
        return <View>
            <Image style={{width:300,height:200}} source={require('../../img/380146.jpg')}></Image>
            <Image source={{uri:'http://img3.imgtn.bdimg.com/it/u=2552227650,2099781205&fm=11&gp=0.jpg'}}></Image>
        </View>
    }
}