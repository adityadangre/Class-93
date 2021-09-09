import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeHeader extends Component {
    render() {
        return (
            <View>
                <SafeAreaView style={styles.droidSafeArea} />
                <View>
                    <Text style={styles.ctext}>Categories</Text>
                </View>
                <View style={styles.ccon}>
                    <View style={styles.cbutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/academic.png')} style={styles.cicon} />
                            <Text>Academic</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cbutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/friction.png')} style={styles.cicon} />
                            <Text>Friction</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cbutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/nonfriction.png')} style={styles.cicon} />
                            <Text>Non-Friction</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cbutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/exam.png')} style={styles.cicon} />
                            <Text>Exam</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cbutton}>
                        <TouchableOpacity>
                            <Image source={require('../assets/other.png')} style={styles.cicon} />
                            <Text>Other</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(15)
    },
    ctext: {
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: -10
    },
    ccon: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'space-between',
        marginBottom: 10
    },
    cicon: {
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'space-between'
    },
    cbutton: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})