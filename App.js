import * as React from 'react';
import {View} from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Login from "./screens/Login/Login";
import Loading from "./screens/Login/Loading";
import Dashboard from "./screens/Login/Dashboard";
import AddItem from './screens/Dashboard/AddItem';
import Settings from './screens/Dashboard/Settings';
import ProductDetail from './screens/Dashboard/ProductDetail';
import Photo from './screens/Dashboard/Photo'
import Home from './screens/Dashboard/Home'
import Mine from './screens/Dashboard/Mine'
//import StackNavigation from './navigation/StackNavigation'

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard,
  AddItem: AddItem,
  Settings: Settings,
  ProductDetail: ProductDetail,
  Home: Home,
  Photo: Photo,
  Mine: Mine,
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
      <AppNavigator/>
  )
}