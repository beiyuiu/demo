/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginComponent from './app/components/project/login';
import {StackNavigator} from 'react-navigation';
import MainComponent from './app/components/project/main';
import ProductListComponent from './app/components/project/productList';
import UserListComponent from './app/components/project/userList';

const myIndex = StackNavigator({
  myUserList:{screen:UserListComponent,
    navigationOptions:()=>{
      return {
        headerTitle:'用户列表',
        headerTitleStyle:{alignSelf:'center'}
      }
    }
  },
  myLogin:{screen:LoginComponent,
    navigationOptions:()=>{
      return {
        headerTitle:'登录',
        headerTitleStyle:{alignSelf:'center'}
      }
    }
},
  myMain:{screen:MainComponent,
    navigationOptions:()=>{
      return {
        headerTitle:'管理页面',
        headerTitleStyle:{alignSelf:'center'}
      }
    }
},
  myProductList:{screen:ProductListComponent,
    navigationOptions:()=>{
      return {
        headerTitle:'商品列表',
        headerTitleStyle:{alignSelf:'center'}
      }
    }
}
});

export default class myapp extends Component {
  render() {
    return <LoginComponent/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myapp', () => myIndex);
