import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar, Image } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default function AddItem({navigation}) {
        return (
            
            <View style={{flex: 1, backgroundColor: 'lightgray'}}>
            <SafeAreaView style={styles.droidSafeArea} />
                <Text style={styles.text1}> Fly With Books </Text>
                <Text style={styles.text2}> Selling books made fun and easy </Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Photo')}>
                        <Image source={require('../../assets/sell.png')} style={styles.img} />
                        <Text style={styles.btntext}>Sell</Text>
                    </TouchableOpacity>                    
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(100)
    },
    text1: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 100
    },
    text2: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnContainer: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        marginTop: 120,
        width: 150,
        height:150,
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
    
    },
    btntext: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
    },
    img: {
        width:100,
        height:100,
        borderRadius:100        
    }
})
