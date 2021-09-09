import * as React from "react";
import {View} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "../../navigation/TabNavigation";
import StackNavigation from "../../navigation/StackNavigation";

export default class Dashboard extends React.Component{
  render(){
  return (
    <NavigationContainer>
     
      <TabNavigation />
    </NavigationContainer>
  );
  }
}