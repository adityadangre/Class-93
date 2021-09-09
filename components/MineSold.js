import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, Image } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export default class MineSold extends Component {
    render() {
        return (
            <ScrollView style={{justifyContent: 'space-between', alignItems: 'center'}}>
            <SafeAreaView style={styles.droidSafeArea} />
            <View style={{flexDirection: 'row'}}>
                <View style={styles.cibutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/bookex1.png')} style={styles.ciicon} />
                            <Text style={{marginLeft: 10}}>Grammar</Text>
                            <Text style={{marginLeft: 10}}>100pts</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.cibutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/bookex1.png')} style={styles.ciicon} />
                            <Text style={{marginLeft: 10}}>Grammar</Text>
                            <Text style={{marginLeft: 10}}>100pts</Text>
                        </TouchableOpacity>
                </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={styles.cibutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/bookex1.png')} style={styles.ciicon} />
                            <Text style={{marginLeft: 10}}>Grammar</Text>
                            <Text style={{marginLeft: 10}}>100pts</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.cibutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/bookex1.png')} style={styles.ciicon} />
                            <Text style={{marginLeft: 10}}>Grammar</Text>
                            <Text style={{marginLeft: 10}}>100pts</Text>
                        </TouchableOpacity>
                </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={styles.cibutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/bookex1.png')} style={styles.ciicon} />
                            <Text style={{marginLeft: 10}}>Grammar</Text>
                            <Text style={{marginLeft: 10}}>100pts</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.cibutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/bookex1.png')} style={styles.ciicon} />
                            <Text style={{marginLeft: 10}}>Grammar</Text>
                            <Text style={{marginLeft: 10}}>100pts</Text>
                        </TouchableOpacity>
                </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={styles.cibutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/bookex1.png')} style={styles.ciicon} />
                            <Text style={{marginLeft: 10}}>Grammar</Text>
                            <Text style={{marginLeft: 10}}>100pts</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.cibutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/bookex1.png')} style={styles.ciicon} />
                            <Text style={{marginLeft: 10}}>Grammar</Text>
                            <Text style={{marginLeft: 10}}>100pts</Text>
                        </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(15)
    },
    ciicon: {
        width: 100,
        height: 120,
        justifyContent: 'space-between',
        borderRadius: 10
    },
    cibutton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'gray',
        width: 110,
        height: 170,
        marginLeft: 15
    }
})
