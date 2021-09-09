import React, { Component } from 'react'
import { View } from 'react-native';
import HomeHeader from '../../components/HomeHeader'
import HomeCategory from '../../components/HomeCategory'
import HomeCItem from '../../components/HomeCItem'

export default class Home extends Component {
    render() {
        return (
            <View>
                <HomeHeader />
                <HomeCategory />
                <HomeCItem />
            </View>
        )
    }
}