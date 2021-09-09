import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform, TouchableOpacity } from 'react-native'
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";

export default class Settings extends Component {
    logOut = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View>
            <SafeAreaView style={styles.droidSafeArea} />
                <Text style={styles.text1}> Fly With Books </Text>
                <Text style={styles.text2}> Selling books made fun and easy </Text>
                <View style={{marginTop: 40}}>
                    <TouchableOpacity style={{flexDirection: 'row', marginBottom: 20, borderBottomWidth: 1, paddingLeft: 15, justifyContent: 'space-between', paddingRight: 15}}>
                        <Text style={{fontSize: 20}}>My Address</Text>
                        <Text style={{fontSize: 20}}>➡</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', marginBottom: 20, borderBottomWidth: 1, paddingLeft: 15, justifyContent: 'space-between', paddingRight: 15}}>
                        <Text style={{fontSize: 20}}>Support Center</Text>
                        <Text style={{fontSize: 20}}>➡</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', marginBottom: 20, borderBottomWidth: 1, paddingLeft: 15, justifyContent: 'space-between', paddingRight: 15}}>
                        <Text style={{fontSize: 20}}>Buy Points</Text>
                        <Text style={{fontSize: 20}}>➡</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.logOut()} style={{flexDirection: 'row', marginBottom: 20, borderBottomWidth: 1, paddingLeft: 15, justifyContent: 'space-between', paddingRight: 15}}>
                        <Text style={{fontSize: 20}}>Log Out</Text>
                        <Text style={{fontSize: 20}}>➡</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(100)
    },
    text1: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50
    },
    text2: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})
