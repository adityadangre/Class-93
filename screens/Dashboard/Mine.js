import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, Platform, StatusBar, StyleSheet, Image } from 'react-native'
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import MineBought from '../../components/MineBought'
import MinePost from '../../components/MinePost'
import MineSold from '../../components/MineSold'

export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_image: "",
            name: ""
        };
    }

    componentDidMount() {
       this.fetchUser();
    }

    async fetchUser() {
        let name, image;
        await firebase
            .database()
            .ref("/users/user/" + firebase.auth().currentUser.uid)
            .on("value", function (snapshot) {
                name = `${snapshot.val().first_name} ${snapshot.val().last_name}`;
                image = snapshot.val().profile_picture;
            });
        this.setState({
            name: name,
           profile_image: image
        });
    }

    render() {
        return (
            <View>
            <SafeAreaView style={styles.droidSafeArea} />
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("Settings");}}>
                    <Text style={{textAlign: 'right', fontSize: 20, marginTop: 10, marginBottom: 20, marginRight: 15}}>⚙️</Text>
                </TouchableOpacity>
                    <View style={{flex: 0.5, justifyContent: "center", alignItems: "center"}}>
                        <Image
                            source={{ uri: this.state.profile_image }}
                            style={{width: RFValue(140), height: RFValue(140), borderRadius: RFValue(70)}}
                        ></Image>
                        <Text
                            style={{color: "black", fontSize: RFValue(40), marginTop: RFValue(10)}}
                        >
                            {this.state.name} 
                        </Text>
                    </View>
                <View style={{paddingRight: 15, paddingLeft: 15, marginLeft: 20, marginRight: 20, flexDirection: 'row', backgroundColor: '#FFFEC8', borderRadius: 10, height: 50, width: 300, justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', alignSelf: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>My Points   500</Text>
                    <TouchableOpacity style={{backgroundColor: 'orange', height: 35, width: 75, justifyContent: 'center', alignSelf: 'center', borderRadius: 10}}>
                        <Text  style={{fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 80, marginRight: 80, justifyContent: 'space-between', marginTop: 30}}>
                    <TouchableOpacity onPress={<MineBought />}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Bought</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={<MinePost />}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={<MineSold />}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Sold</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(50)
    },
})