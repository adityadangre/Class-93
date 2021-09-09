import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Dashboard/Home';
import AddItem from '../screens/Dashboard/AddItem';
import Mine from '../screens/Dashboard/Mine';
import StackNavigation from "./StackNavigation";

export default class TabNavigation extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home:{screen:Home, navigationOptions:{
    tabBarLabel: "Home",
    tabBarIcon: <Ionicons name="home-outline" size={25} color="orange"></Ionicons>
  }},
  _:{screen:StackNavigation, navigationOptions:{
    tabBarLabel: false,
    tabBarIcon: <Image
    style={{
    width: 50,
    height: 50,
    alignSelf: 'center',
    borderRadius: 100,
    justifyContent: "center",
    marginTop: -20
    }}
    source={require('../assets/plusicon.png')}
    />
  }},
  Mine:{screen:Mine, navigationOptions:{
    tabBarLabel: "Mine",
    tabBarIcon: <Ionicons name="happy-outline" size={25} color="orange"></Ionicons>
  }}
})

const AppContainer = createAppContainer(TabNavigator)