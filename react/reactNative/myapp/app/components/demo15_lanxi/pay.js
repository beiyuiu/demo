import React,{Component} from 'react';
import {Text,Button,View} from 'react-native';

export default class PayComponent extends Component{
    back=()=>{
       // this.props.navigation.goBack();
        this.props.navigation.navigate('myList');
    }
    componentDidMount(){
        //接受参数
        console.log(this.props.navigation);
    }
    render(){
        return <View>
            {
                this.props.navigation.state.params.msg>1000 && 
                <Text>{price = this.props.navigation.state.params.msg}</Text>
            }
            <Button title='返回' onPress={this.back}></Button>
        </View>
    }
}