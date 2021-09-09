import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeCItem extends Component {
    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginRight: 15}}>
                    <View>
                        <Text style={[styles.citext]}>Academic</Text>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Text style={[styles.citext, {color: 'blue'}]}>See More</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                <View style={styles.ccon}>
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

                <SafeAreaView style={styles.droidSafeArea} />
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginRight: 15}}>
                    <View>
                        <Text style={[styles.citext]}>Friction</Text>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Text style={[styles.citext, {color: 'blue'}]}>See More</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                <View style={styles.ccon}>
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

                <SafeAreaView style={styles.droidSafeArea} />
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginRight: 15}}>
                    <View>
                        <Text style={[styles.citext]}>Non-Friction</Text>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Text style={[styles.citext, {color: 'blue'}]}>See More</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                <View style={styles.ccon}>
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

                <SafeAreaView style={styles.droidSafeArea} />
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginRight: 15}}>
                    <View>
                        <Text style={[styles.citext]}>Competative Exams</Text>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Text style={[styles.citext, {color: 'blue'}]}>See More</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                <View style={styles.ccon}>
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

                <SafeAreaView style={styles.droidSafeArea} />
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginRight: 15}}>
                    <View>
                        <Text style={[styles.citext]}>Other</Text>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Text style={[styles.citext, {color: 'blue'}]}>See More</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                <View style={styles.ccon}>
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
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(15)
    },
    ccon: {
        flexDirection: 'row',
    },
    citext: {
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
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