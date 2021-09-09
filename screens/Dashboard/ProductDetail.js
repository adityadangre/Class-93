import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

export default class ProductDetail extends Component {
    render() {
        return (
            <View>
            <ScrollView>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={{flexDirection: 'row', marginBottom: 10, paddingLeft: 15, justifyContent: 'space-between', paddingRight: 15}}>
                <TouchableOpacity style={styles.icon}>
                        <Ionicons name="arrow-back-outline" size={25} color="black"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                        <Ionicons name="heart-outline" size={25} color="black"></Ionicons>
                </TouchableOpacity>
                </View>
                <Text style={{color: 'red', fontSize: 20, marginLeft: 15}}>Get it free with</Text>
                <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginBottom: 20}}>100 points</Text>
                <Text style={{fontSize: 18, marginLeft: 15, marginBottom: 5}}>New Grammar and More</Text>
                <Text style={{fontSize: 14, marginLeft: 15, marginBottom: 5}}>This is Class 8th grammar book which is very informitive for students in class 8th.</Text>
                <Text style={{fontSize: 14, marginLeft: 15, marginBottom: 10}}>Condition: Likely New</Text>
                <Image source={require('../../assets/bookex1.png')} style={styles.ciicon} />
                <Image source={require('../../assets/bookex1.png')} style={styles.ciicon} />
            </ScrollView>
            <TouchableOpacity style={styles.postbtn}>
                    <Text style={styles.postbtntext}>Grab Now</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(100)
    },
    searchicon: {
        marginLeft: 10
    },
    ciicon: {
        width: 320,
        height: 350,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10, 
        alignContent: "center", 
        alignSelf: "center",
        marginBottom: 10
    },
    postbtn: {
        backgroundColor: '#FFBA00',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
    },
    postbtntext: {
        fontWeight: 'bold',
        fontSize: 25,
    }
})