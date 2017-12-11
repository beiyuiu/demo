import React,{Component} from 'react';
import {Image,View,Button,TextInput,ActivityIndicator,Text} from 'react-native';

export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
            uName:'',
            uPwd:'',
            isLoadingShow:false
        }
    }
    handlePress=()=>{
        //获取用户名密码
        console.log(this.state);
        //修改状态中isLoadingShow,能够显示
        this.setState({isLoadingShow:true});
        count = 0;
        
        timer = setInterval(()=>{
            console.log(count);
            count++;
            if(count>3){
            //发起网络请求
                fetch('http://176.202.56.93/ajia_code/data/user/login.php?uname='+this.state.uName+"&upwd="+this.state.uPwd)
                .then((response)=>{return response.json()})
                .then((response)=>{
                console.log(response);
            //登录成功跳转到主页
                if(response.code==200){
                    this.setState({isLoadingShow:false});
                    this.props.navigation.navigate('myMain');
                }
            })
            clearInterval(timer);
            }
        },1000);
    }
    HandleChangeEvent=(msg)=>{
        this.setState({uName:msg});
    }
    HandleChangePwd=(msg)=>{
        this.setState({uPwd:msg});
    }
    render(){
        return <View>
            <Image source={require('../../img/lp.jpg')} style={{alignSelf:'center',width:100,height:100,borderRadius:50}}></Image>
            <TextInput placeholder='请输入用户名' onChangeText={this.HandleChangeEvent}></TextInput>
            <TextInput placeholder='请输入密码' secureTextEntry={true} onChangeText={this.HandleChangePwd}></TextInput>
            <Button title="登录" onPress={this.handlePress}></Button>
            <View>
               {this.state.isLoadingShow && <View style={{alignItems:'center'}}>
                   <ActivityIndicator></ActivityIndicator>
                   <Text>Loading.....</Text>
                   </View>}     
            </View>
        </View>
    }
}