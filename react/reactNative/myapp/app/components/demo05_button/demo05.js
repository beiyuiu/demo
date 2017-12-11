import React,{Component} from 'react';
import {Button,Text,View} from 'react-native';

export default class Demo05Component extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    handlePress=()=>{
        console.log('clicked');
        var nowCount = this.state.count;
        nowCount++;
        this.setState({count:nowCount});
    }
    render(){
        return <View>
            <Text>{this.state.count}</Text>
            <Button onPress={this.handlePress} title="clickMe"></Button>
        </View>
    }
}