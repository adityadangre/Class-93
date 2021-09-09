import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"

import AddItem from '../screens/Dashboard/AddItem';
import Photo from '../screens/Dashboard/Photo'
import TabNavigation from './TabNavigation'
const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
        
            <Stack.Screen name="AddItem" component={AddItem} />
            
            <Stack.Screen name="Photo" component={Photo} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
